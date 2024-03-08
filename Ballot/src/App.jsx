import { Container } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";
import Proposals from "./components/Proposals";


connectWalletPrompt();

function App() {
  return (
    <Container>
      <Header />
      <h1>I am here</h1>

      <Proposals name={"Dele"} voteCount={2}/>
    </Container>
  )
}

export default App
