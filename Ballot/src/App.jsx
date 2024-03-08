import { Container } from "@radix-ui/themes";
import Header from "./components/Header"
import {connectWalletPrompt} from "./connection";


connectWalletPrompt();

function App() {
  return (
    <Container>
      <Header />
      <h1>I am here</h1>
    </Container>
  )
}

export default App
