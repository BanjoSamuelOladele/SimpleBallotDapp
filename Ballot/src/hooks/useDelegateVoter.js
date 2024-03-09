import { useCallback } from "react";
import { isSupportedChain } from "../utils/isSupportedChain";
import { isAddress } from "ethers";
import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { toast } from "react-toastify";
import { getContract } from "../constants/contract";
import { readAndChangeStateProvider } from "../constants/provider";


const useDelegateFunction = (address) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        if (!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = readAndChangeStateProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getContract(signer);

        const toastId = toast.loading('Delegating:::');
        try {
            const transaction = await contract.delegate(address);
            const receipt = await transaction.wait();

            toast.remove(toastId)
            if (receipt.status) {
                toast.success(`successfully delegated!`);
            }
        } catch (error) {
            toast.remove(toastId)
            toast.error(`Delegation failed! ${error.reason}`)
        }
    }, [address, chainId, walletProvider]);
}

export default useDelegateFunction;