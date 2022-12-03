import React from 'react';
import {Badge, Box, Divider, Flex, Heading, useColorModeValue, useMediaQuery, VStack,} from '@chakra-ui/react'
import {Config} from "../config";

const TechStack: React.FC = () => {
    return (
        <VStack align={"stretch"} spacing={4} my={4}>
            <Heading size={"lg"}>{Config.tech.title}</Heading>
            <Divider/>
            <VStack align={"stretch"} shadow={"base"} rounded={"md"} spacing={4} p={4}>
                {Config.tech.table.map((val, index) => {
                    return (
                        <Box key={index}>
                            <StackRow key={index} index={index} title={val.title} skills={val.skills}/>
                            <Divider key={index + 1000}/>
                        </Box>
                    )
                })}
            </VStack>
        </VStack>
    )
};

export default TechStack;

interface BadgeProps {
    text: string
}

const StyledBadge = ({text}: BadgeProps): JSX.Element => {
    return (
        <Badge
            mx={2}
            my={1}
            p={1}
            fontSize={".9rem"}
            bg={useColorModeValue('gray.100', 'gray.700')}
            fontWeight={'400'}>
            {text}
        </Badge>
    )
}


interface StackRowProps {
    index: number,
    title: string,
    skills: string[]
}

const StackRow = (p: StackRowProps) => {
    const [isSmallDisplay] = useMediaQuery('(max-width: 800px)')

    return (
        <Box key={p.index}>
            {
                isSmallDisplay ?
                    <Heading flexBasis={"15%"} color={"gray.600"} pl={1} pr={2} mb={2}
                             size={"sm"}>{p.title}</Heading> :
                    <></>
            }
            <Flex align={"center"} flexWrap={"wrap"}>
                {
                    !isSmallDisplay ? <Heading flexBasis={"15%"} color={"gray.600"} pl={1} pr={2} mb={2}
                                               size={"sm"}>{p.title}
                    </Heading> : <></>
                }
                {p.skills.map((skill, index) => <StyledBadge key={index} text={skill}/>)}
            </Flex>
        </Box>
    )
};

