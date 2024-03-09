import { useEffect, useState } from "react"
import { readOnlyProvider } from "../constants/provider";
import { getContract } from "../constants/contract";
import { ethers } from "ethers";



export const useProposals = () => {
    const [proposals, setProposals] = useState([]);
    useEffect(() => {
        const contract = getContract(readOnlyProvider);
        contract.getAllProposals()
            .then(
                res => {
                    const destructured = res.map(index =>({
                        name: ethers.decodeBytes32String(index.name),
                        voteCount: index.voteCount
                    }));
                    console.log(destructured);
                    setProposals(destructured);
                }
            ).catch(error => {
                console.error(error);
            })
        }, [])
    return proposals;
}
export default useProposals;