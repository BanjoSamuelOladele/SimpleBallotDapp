import { Card, Flex, Box, Text, Avatar  } from "@radix-ui/themes";
import useHandleVote from "../functions/useHandleVote";



const Proposals = (props) => {
    const handleVote = useHandleVote(props.id);
    return (
        <Card style={{ maxWidth: 240 }}>
            <Flex justify={"between"} gap="3" align="center">
            <Avatar size="4" radius="full" fallback={`#${Number(props.id)}`} color="indigo" />
                <Box>
                    <Text as="div" size="2" weight="bold">
                        {props.name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                        Number of Votes: {Number(props.voteCount)}
                    </Text>
                </Box>
                <button  onClick={handleVote}>Vote</button>
            </Flex>
        </Card>
    )
};

export default Proposals;