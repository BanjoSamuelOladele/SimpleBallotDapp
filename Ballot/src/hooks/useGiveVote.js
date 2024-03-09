import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils/isSupportedChain";
import { isAddress } from "ethers";
import { readAndChangeStateProvider } from "../constants/provider";
import { getContract } from "../constants/contract";
import { useCallback } from "react";



const useGiveVote = (address) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        if (!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = readAndChangeStateProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getContract(signer);

        try {
            const estimatedGas = await contract.giveRightToVote.estimateGas(
                address
            );

            const transaction = await contract.giveRightToVote(address, {
                gasLimit: estimatedGas,
            });
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return console.log("giveRightToVote successfull!");
            }

            console.log("giveRightToVote failed!");
        } catch (error) {
            console.error("error: ", error);
        }
    }, [address, chainId, walletProvider]);
}

export default useGiveVote;