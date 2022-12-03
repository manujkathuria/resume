import React from 'react';
import {Divider, Heading, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import {Config} from "../config";

const About: React.FC = () => (
    <VStack align={"stretch"} spacing={4} my={4}>
        <Heading size={"lg"}>{Config.about.title}</Heading>
        <Divider/>

        <UnorderedList px={3}>
            {Config.about.content.map((item,index) => {
                return (
                    <ListItem key={index} textAlign={"justify"}>{item}</ListItem>
                )
            })}
        </UnorderedList>
    </VStack>
);
export default About;

