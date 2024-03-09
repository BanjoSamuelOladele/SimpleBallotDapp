import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { isSupportedChain } from "../utils/isSupportedChain";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { isAddress } from "ethers";
import { readAndChangeStateProvider } from "../constants/provider";
import { getContract } from "../constants/contract";



const handlePermitToVote = (address) => {

    const {chainId} = useWeb3ModalAccount();
    const {walletProvider} = useWeb3ModalProvider();


    return useEffect(async () => {

        if(!isSupportedChain(chainId)) return toast.error("not on the supported network");
        if(!isAddress(address)) return toast.error("");

        const readAndWrite = readAndChangeStateProvider(walletProvider);
        const signer = readAndWrite.getSigner();

        const contract = getContract(signer);

        try{
            const estimatedGas = await contract.giveRightToVote.estimateGas(address);
        }catch(error){
            
        }

    }, [])
    
    
}
export default handlePermitToVote;