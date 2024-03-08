
import { Container, Flex } from "@radix-ui/themes"
import PermitToVote from "./PermitToVote"

const Header = () =>{
    return(
        <div className="flex item-center justify-between">
            <Container>Ballot Dapp</Container>
            <Flex>
                <PermitToVote />
                <w3m-button />
            </Flex>
        </div>
    )
}

export default Header