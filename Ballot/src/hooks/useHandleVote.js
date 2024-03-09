import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils/isSupportedChain";
// import { toast } from "react-toastify";
import { readAndChangeStateProvider } from "../constants/provider";
import { getContract } from "../constants/contract";
import { useCallback } from "react";
// import handleSigner from "./handleSigner";


const useHandleVote = (id) => {

    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();

    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        const readWriteProvider = readAndChangeStateProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getContract(signer);

        try {
            const transaction = await contract.vote(id);
            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return console.log("vote successfull!");
            }

            console.log("vote failed!");
        } catch (error) {
            console.log(error);
            let errorText;
            if (error.reason === "Has no right to vote") {
                errorText = "You have not right to vote";
            } else if (error.reason === "Already voted.") {
                errorText = "You have already voted";
            } else {
                errorText = "An unknown error occured";
            }

            console.error("error: ", errorText);
        }
    });
}

export default useHandleVote;