import { Container } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";
import Proposals from "./components/Proposals";
import Delegate from "./components/Delegate";
import handleVote from "./functions/handleVote";


connectWalletPrompt();

function App() {
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
