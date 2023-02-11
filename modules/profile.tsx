import React from 'react';
import {Heading, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import {Config} from "../config";
import Card from "../components/card";
import ResumeHeading from "../components/heading";

const Profile: React.FC = () => (
    <VStack align={"stretch"} my={4}>
        <ResumeHeading title={Config.profile.title}/>
        <Card>
            <UnorderedList>
                {Config.profile.content.map((item, index) => {
                    return (
                        <ListItem p={2} key={index} textAlign={"justify"}>{item}</ListItem>
                    )
                })}
            </UnorderedList>
        </Card>
    </VStack>
);
export default Profile;

