

import { Card, Flex, Box, Text, TextField } from "@radix-ui/themes";
import {  } from "module";

const Delegate = () => {
    return(
        <Card style={{ maxWidth: 240 }}>
            <Flex gap="3" align="center">
                <Box>
                    <Text as="div" size="2" color="gray">
                        Delegate Vote
                    </Text>
                    <TextField.Input placeholder="Enter Delegate Address" />
                    <button>Delegate Vote</button>
                </Box>
            </Flex>
        </Card>
    );
}

export default Delegate;