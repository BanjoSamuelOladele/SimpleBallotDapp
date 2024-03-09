import { useWeb3ModalAccount } from "@web3modal/ethers/react";



const isChairPerson = () => {
    const {address} = useWeb3ModalAccount();
    return address === import.meta.env.VITE_chairPersonAddress;
}

export default isChairPerson;