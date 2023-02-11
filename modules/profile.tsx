import React from 'react';
import {Divider, Heading, ListItem, UnorderedList, VStack} from "@chakra-ui/react";
import {Config} from "../config";
import Card from "../components/card";

const Profile: React.FC = () => (
    <VStack align={"stretch"} spacing={4} my={4}>
        <Heading size={"lg"}>{Config.profile.title}</Heading>
        <Card>
            <UnorderedList px={3}>
                {Config.profile.content.map((item, index) => {
                    return (
                        <ListItem key={index} textAlign={"justify"}>{item}</ListItem>
                    )
                })}
            </UnorderedList>
        </Card>
    </VStack>
);
export default Profile;

