import { useEffect, useState } from "react"
import { readOnlyProvider } from "../constants/provider";
import { getContract } from "../constants/contract";



export const useProposals = () =>{


    const [proposals, setProposals] = useState([]);


    useEffect(() => {
        const contract = getContract(readOnlyProvider);

        contract.getAllProposals().then(
            res => {
                setProposals(res)
            }
        ).catch(error => {
            console.error(error);
        })
    }, [])
    


    (proposals);
}