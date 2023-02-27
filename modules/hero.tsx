import React from 'react';
import {Avatar, Box, Flex, Heading, HStack, Icon, Link, Text, Tooltip, VStack} from "@chakra-ui/react";
import {AiFillLinkedin, AiOutlineMail} from 'react-icons/ai'

const Hero = (): JSX.Element => {
    return (
        <Box bg={"gray.600"} color={"gray.200"}>
            <VStack align={"center"} p={"2.5em"}>
                <Avatar color={"gray.300"} bg={"gray.700"} size='2xl' name='Manuj Kathuria'
                        src={'./profile.jpeg'}/>
                <Heading color={"gray.300"} size={"lg"}>Manuj Kathuria</Heading>
                <Text color={"gray.300"} fontSize={"md"}>Software Engineer</Text>
                <HStack spacing={4}>
                    <Tooltip hasArrow label='manujkathuria@outlook.com' fontSize='md'>
                        <Link href='mailto:manujkathuria@outlook.com'>
                            <Icon boxSize={6} as={AiOutlineMail}/>
                        </Link>
                    </Tooltip>

                    <Tooltip hasArrow label='Linkedin Profile' fontSize='md'>
                        <Link href='https://www.linkedin.com/in/manujkathuria/' isExternal>
                            <Icon boxSize={6} as={AiFillLinkedin}/>
                        </Link>
                    </Tooltip>


                </HStack>
            </VStack>
            <Flex justifyContent={"space-around"}>


            </Flex>

        </Box>
    );
};

export default Hero;
