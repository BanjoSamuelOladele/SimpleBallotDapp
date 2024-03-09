import { Container, Flex } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";
import Proposals from "./components/Proposals";
import Delegate from "./components/Delegate";
import handleVote from "./functions/handleVote";
import useProposals from "./functions/useProposal";


connectWalletPrompt();

function App() {

  const proposal = useProposals();
  console.log("inside the app... ",proposal);
  return (
    <Container>
      <Header />
      <Delegate />
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
    </Container>
  )
}

export default App
