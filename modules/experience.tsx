import React from 'react';
import {Box, Heading, ListItem, Text, UnorderedList, VStack} from "@chakra-ui/react";
import {Config} from "../config";
import Card from "../components/card";
import ResumeHeading from "../components/heading";


const Experience = (): JSX.Element => {
    return (
        <VStack align={"stretch"} spacing={4} my={4}>
            <ResumeHeading title={Config.experience.title}/>
            {Config.experience.details.map((val, index) => {
                return (
                    <Card key={index}>
                        <Heading size={"md"}>{val.company}</Heading>
                        {val?.client ? <Heading size={"xs"}>Client: {val.client}</Heading> : <></>}
                        <VStack align={"stretch"} spacing={0}>
                            <Text as='cite'>Position: {val.position}</Text>
                            <Text as='cite'>Location: {val.location}</Text>
                        </VStack>
                        <Box p={1}>
                            <UnorderedList>
                                {val.tasks.map((task, index) => {
                                    return (
                                        <ListItem p={1} key={index} textAlign={"justify"}>{task}</ListItem>
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













