import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { readAndChangeStateProvider } from "../constants/provider";



const handleSigner = async () => {
    const {chainId} = useWeb3ModalAccount();
    const {walletProvider} = useWeb3ModalProvider();
    if(isSupportedChain(chainId)) return toast.error("invalid address");
    const readAndChangeState = readAndChangeStateProvider(walletProvider);
    const signer = await readAndChangeState.getSigner();

    return signer;
}

export default handleSigner;