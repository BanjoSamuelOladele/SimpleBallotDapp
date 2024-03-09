import { useEffect, useState } from "react"
import { readOnlyProvider } from "../constants/provider";
import { getContract } from "../constants/contract";



export default function useProposals(){

    const [proposals, setProposals] = useState([]);


    useEffect(() => {
        const contract = getContract(readOnlyProvider);
    
        console.log(contract.getAllProposals());

        //console.log(" gotten contracts...",contract);

        // contract.getAllProposals().then(
        //     res => {
        //         console.log(res)
        //         setProposals(res)
        //     }
        // ).catch(error => {
        //     console.error(error);
        // })
    }, [])
    


    // (proposals);

    return proposals;
}


// export default useProposals;