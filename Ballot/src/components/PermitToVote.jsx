

import { Dialog, Flex, Button, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";
import useGiveVote from "../hooks/useGiveVote";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import isChairPerson from "../hooks/useIsChairPerson";


const PermitToVote = () => {

    const [addressa, setAddress] = useState("");

    const giveVote = useGiveVote(addressa);

    const {address} = useWeb3ModalAccount();

    const chairPerson = isChairPerson(address);

    return (
        <Dialog.Root>
                <Dialog.Trigger>
                    <Button className="bg-blue-600">Permit Voter</Button>
                </Dialog.Trigger>

                <Dialog.Content style={{ maxWidth: 450 }}>
                    <Dialog.Title>Edit profile</Dialog.Title>
                    <Dialog.Description size="2" mb="4">
                        Give right to vote
                    </Dialog.Description>

                    <Flex direction="column" gap="3">
                        <label>
                            <Text as="div" size="2" mb="1" weight="bold">
                                Voter&apos;s Address
                            </Text>
                            <TextField.Input
                            value={addressa}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Enter Voter's Address" />
                        </label>
                    </Flex>

                    <Flex gap="3" mt="4" justify="end">
                        <Dialog.Close>
                            <Button variant="soft" color="gray">
                                Cancel
                            </Button>
                        </Dialog.Close>
                        <Dialog.Close>
                            {
                                chairPerson ? 
                                    <Button 
                                        onClick={() => giveVote(addressa)}
                                        className="bg-blue-600">Give Access to Vote
                                    </Button>
                                : 
                                    <Button 
                                        disabled={true}
                                        onClick={() => giveVote(addressa)}
                                        className="bg-blue-600">Give Access to Vote
                                    </Button>
                            }
                        </Dialog.Close>
                    </Flex>
                </Dialog.Content>
            </Dialog.Root>
    );
};


export default PermitToVote;