import { Container } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";
import Proposals from "./components/Proposals";
import Delegate from "./components/Delegate";
import handleVote from "./functions/handleVote";
import useProposals from "./functions/useProposal";


connectWalletPrompt();

function App() {

  const {proposal} = useProposals();
  console.log("inside the app... ",proposal);
  return (
    <Container>
      <Header />
      <Delegate />
      <Proposals 
        id={1} 
        name={"Dele"} 
        voteCount={2} 
        handleVote={handleVote}
      />
    </Container>
  )
}

export default App
