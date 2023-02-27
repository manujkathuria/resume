import React from 'react';
import {Heading, Text, VStack} from "@chakra-ui/react";
import ResumeHeading from "../components/heading";
import Card from "../components/card";

const Certifications: React.FC = () => (

    <VStack align={"stretch"} my={4}>
        <ResumeHeading title={"Self Learning"}/>
        <Card>
            <Heading size={"md"}>Bachelors - Information Technology (2007-2011)</Heading>
            <Text as='cite'>Maharshi Dayanand University </Text>
            <Text as='cite'>Haryana, India</Text>
        </Card>
    </VStack>

);

export default Certifications;
