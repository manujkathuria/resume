import React from 'react';
import {Avatar, Heading, VStack, WrapItem} from "@chakra-ui/react";

const Hero = (): JSX.Element => {
    return (
        <VStack align={"center"} padding={"5em"} minH={"30vH"} bg={"gray.600"} color={"gray.200"}>
            <WrapItem>
                <Avatar color={"gray.300"} bg={"gray.700"} size='2xl' name='Manuj Kathuria'
                        src={'./profile.jpeg'}/>
            </WrapItem>
            <Heading color={"gray.300"} size={"xl"}>Manuj Kathuria</Heading>
            <Heading color={"gray.300"} size={"md"}>IT Specialist</Heading>

        </VStack>
    );
};

export default Hero;
