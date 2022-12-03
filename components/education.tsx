import React from 'react';
import {Divider, Heading, Text, VStack} from "@chakra-ui/react";

const Education: React.FC = () => (
    <VStack align={"stretch"} spacing={4} my={4}>
        <Heading size={"lg"}>Education</Heading>
        <Divider/>
        <VStack align={"stretch"} spacing={0}>

            <Heading size={"md"}>B. Tech Information Technology (2007-2011)</Heading>
            <Text as='cite'>Maharshi Dayanand University </Text>
            <Text as='cite'>Haryana, India</Text>
        </VStack>

    </VStack>
);

export default Education;
