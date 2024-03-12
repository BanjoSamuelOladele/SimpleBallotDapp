import { useWeb3ModalAccount, useWeb3ModalProvider } from "@web3modal/ethers/react";
import { readAndChangeStateProvider } from "../constants/provider";
import { isSupportedChain } from "../utils/isSupportedChain";
import { isAddress } from "ethers";
import { getContract } from "../constants/contract";
import { useCallback } from "react";



const handleSigner = () => {
    const {walletProvider} = useWeb3ModalProvider();
    const {address} = useWeb3ModalAccount();

    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    if (!isAddress(address)) return console.error("Invalid address");
    // const readWriteProvider = readAndChangeStateProvider(walletProvider);
    // // return readWriteProvider.getSigner();

    // return getContract(signer);

    let readWriteProvider;
    useCallback(async () =>{
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        if (!isAddress(address)) return console.error("Invalid address");
        readWriteProvider = readAndChangeStateProvider(walletProvider);
    })

    return readAndChangeStateProvider.getSigner();


}
export default handleSigner;