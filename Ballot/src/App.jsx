import { Container } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";
import Proposals from "./components/Proposals";
import Delegate from "./components/Delegate";
// import { useProposals } from "./hooks/useProposal";


connectWalletPrompt();

function App() {
  
  // const proposal = useProposals();

  // console.log(proposal)


  return (
    <Container>
      <Header />
      <Delegate />
      <Proposals id={1} name={"Dele"} voteCount={2}/>
    </Container>
  )
}

export default App
