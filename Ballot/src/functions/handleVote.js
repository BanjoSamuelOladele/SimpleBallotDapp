import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils/isSupportedChain";
import { toast } from "react-toastify";
import { readAndChangeStateProvider } from "../constants/provider";
import { getContract } from "../constants/contract";


const handleVote = async (id) => {

    const {chainId} = useWeb3ModalAccount();
    const {walletProvider} = useWeb3ModalProvider();
    
    if(isSupportedChain(chainId)) return toast.error("");
    
    const readAndChangeState = readAndChangeStateProvider(walletProvider);
    const signer = await readAndChangeState.getSigner();

    const contract = getContract(signer);
    
    try {
        const transaction = await contract.vote(id);
        const result = await transaction.wait();

        if(result.status) toast.success("Voted successfully...")
    } catch (error) {
        if(error.reason === "Has no right to vote") toast.error("Not eligible to vote")
        if(error.reason === "Already voted.") toast.error("")
    }


}

export default handleVote;