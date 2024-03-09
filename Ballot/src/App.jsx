import { Container } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";
import Delegate from "./components/Delegate";
import RenderProposals from "./renderProposals";


connectWalletPrompt();

function App() {
  return (
    <Container>
      <Header />
      <Delegate />
      <RenderProposals />
    </Container>
  )
}

export default App
