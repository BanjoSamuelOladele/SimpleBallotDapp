
import { Container, Flex } from "@radix-ui/themes"
import PermitToVote from "./PermitToVote"
import isChairPerson from "../hooks/useIsChairPerson"

const Header = () =>{
    return(
        <div className="flex item-center justify-between">
            <Container>Ballot Dapp</Container>
            <Flex>
                {isChairPerson && <PermitToVote />}
                <w3m-button />
            </Flex>
        </div>
    )
}

export default Header