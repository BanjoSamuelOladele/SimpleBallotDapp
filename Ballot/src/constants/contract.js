import { ethers } from "ethers";
import {Abi} from "./Abi.json";



export const getContract = (signer) => new ethers.Contract(
    import.meta.env.VITE_contract_address,
    Abi,
    signer
);