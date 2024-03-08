import { Card, Flex, Box, Text  } from "@radix-ui/themes";



const Proposals = (props) => {
    return (
        <Card style={{ maxWidth: 240 }}>
            <Flex justify={"between"} gap="3" align="center">
                <Box>
                    <Text as="div" size="2" weight="bold">
                        {props.name}
                    </Text>
                    <Text as="div" size="2" color="gray">
                        {props.voteCount}
                    </Text>
                </Box>
                <button  onClick={""}>Vote</button>
            </Flex>
        </Card>
    )
};

export default Proposals;