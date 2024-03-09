import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { readAndChangeStateProvider } from "../constants/provider";
import { isSupportedChain } from "../utils/isSupportedChain";



const handleSigner = () => {
    const {chainId} = useWeb3ModalAccount();
    console.log("chain id is :: ",chainId)
    const {walletProvider} = useWeb3ModalProvider();

    console.log("wallet provider is ::", walletProvider)
    if(isSupportedChain(chainId)) return toast.error("invalid address");
    console.log("is supported ::", isSupportedChain(chainId));
    const readAndChangeState = readAndChangeStateProvider(walletProvider);
    
    return readAndChangeState;
    // const signer = await readAndChangeState.getSigner();
    // return signer;
}
export default handleSigner;