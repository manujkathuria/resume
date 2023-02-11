import React from 'react';
import {Badge, Box, Divider, Heading, ListItem, Text, UnorderedList, useColorModeValue, VStack} from "@chakra-ui/react";
import {Config} from "../config";
import Card from "../components/card";


const Experience = (): JSX.Element => {
    return (
        <VStack align={"stretch"} spacing={4} my={4}>
            <Heading size={"lg"}>{Config.experience.title}</Heading>
            <Divider/>
            {Config.experience.details.map((val, index) => {
                return (
                    <Card key={index}>
                        <Heading size={"md"}>{val.company}</Heading>
                        <VStack align={"stretch"} spacing={0}>
                            <Text as='cite'>{val.position}</Text>
                            <Text as='cite'>{val.location}</Text>
                        </VStack>
                        <Box p={1}>
                            <UnorderedList>
                                {val.tasks.map((task, index) => {
                                    return (
                                        <ListItem key={index} textAlign={"justify"}>{task}</ListItem>
                                    )
                                })}
                            </UnorderedList>
                        </Box>
                    </Card>
                )
            })}

        </VStack>
    );
};

export default Experience;













