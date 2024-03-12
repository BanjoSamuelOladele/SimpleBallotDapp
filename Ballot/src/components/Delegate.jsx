

import { Card, Flex, Box, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useDelegateFunction from "../hooks/useDelegateVoter";




const Delegate = () => {
    const [address, setAddress] = useState("");

    const handleDelegateVote = useDelegateFunction(address);
    return(
        <Card style={{ maxWidth: 240 }}>
            <Flex gap="3" align="center">
                <Box>
                    <Text as="div" size="2" color="gray">
                        Delegate Vote
                    </Text>
                    <TextField.Input 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="Enter Delegate Address"
                    />
                    <button
                        onClick={handleDelegateVote}
                    >Delegate Vote</button>
                </Box>
            </Flex>
        </Card>
    );
}

export default Delegate;