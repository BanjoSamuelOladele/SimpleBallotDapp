import { Container } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";
import Proposals from "./components/Proposals";
import Delegate from "./components/Delegate";


connectWalletPrompt();

function App() {
  return (
    <Container>
      <Header />
      <Delegate />
      <Proposals name={"Dele"} voteCount={2}/>
    </Container>
  )
}

export default App
