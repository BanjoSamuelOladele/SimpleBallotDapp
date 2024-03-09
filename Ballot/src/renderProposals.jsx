import { Flex } from "@radix-ui/themes";
import Proposals from "./components/Proposals";
import useProposals from "./functions/useProposal";
import handleVote from "./functions/handleVote";



const RenderProposals = () =>{
    const proposal = useProposals();
    return (
        <Flex wrap={"wrap"} gap={"6"}>
        {
          proposal.map((item, index) => (
            <Proposals
              key={index}
              id={index}
              name={item.name}
              voteCount={item.voteCount}
              handleVote={handleVote}
            />
          ))
        }
      </Flex>
    );
}

export default RenderProposals;