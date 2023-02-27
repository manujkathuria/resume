import React from 'react';
import {Badge, Flex, Table, TableContainer, Tbody, Td, Th, Tr, useColorModeValue, VStack,} from '@chakra-ui/react'
import {Config} from "../config";
import ResumeHeading from "../components/heading";
import Card from "../components/card";

const TechSkills: React.FC = () => {
    return (
        <VStack align={"stretch"} spacing={4} my={4}>
            <ResumeHeading title={Config.tech.title}/>
            <Card>

                <TableContainer>
                    <Table variant='simple'>
                        <Tbody>
                            {
                                Config.tech.table.map((val, index) => {
                                    return (
                                        <Tr key={`skill${index}`}>
                                            <Td p={0} m={0}  as={Th}>{val.title}</Td>
                                            <Td><StackRow skills={val.skills}/></Td>
                                        </Tr>
                                    )
                                })
                            }
                        </Tbody>
                    </Table>
                </TableContainer>

            </Card>
        </VStack>
    )
};

export default TechSkills;

interface BadgeProps {
    text: string
}

const StyledBadge = ({text}: BadgeProps): JSX.Element => {

    return (
        <Badge
            textAlign={"center"}
            mx={2}
            my={2}
            p={1}
            fontSize={".9rem"}
            bg={useColorModeValue('gray.200', 'gray.700')}
            fontWeight={'400'}>
            {text}
        </Badge>
    )
}


interface StackRowProps {
    skills: string[]
}

const StackRow = (p: StackRowProps) => {

        return (
            <Flex alignItems={"center"} flexWrap={"wrap"}>
                {p.skills.map((skill, index) => <StyledBadge key={index} text={skill}/>)}
            </Flex>
        )
    }
;

