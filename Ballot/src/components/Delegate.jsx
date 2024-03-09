

import { Card, Flex, Box, Text, TextField } from "@radix-ui/themes";
import delegateVoter from "../functions/delegateVoter";
import { useState } from "react";




const Delegate = () => {

    const [address, setAddress] = useState("");
    return(
        <Card style={{ maxWidth: 240 }}>
            <Flex gap="3" align="center">
                <Box>
                    <Text as="div" size="2" color="gray">
                        Delegate Vote
                    </Text>
                    <TextField.Input 
                        value={address}
                        onChange={(e) => e.target.value}
                        placeholder="Enter Delegate Address"
                    />
                    <button
                        onClick={delegateVoter}
                    >Delegate Vote</button>
                </Box>
            </Flex>
        </Card>
    );
}

export default Delegate;