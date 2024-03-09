import { useWeb3ModalAccount } from "@web3modal/ethers/react";



const handlePermitToVote = (address) => {

    const {chainId} = useWeb3ModalAccount();

    return useEffect(() => {
      
        if(!isSupportedChain(chainId)) return;
    }, [])
    
}
export default handlePermitToVote;