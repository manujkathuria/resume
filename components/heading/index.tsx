import React from 'react';
import {Heading} from '@chakra-ui/react'

interface props {
    title: string
}

const ResumeHeading = (p: props) => {
    return (
        <Heading fontSize={"1.7rem"} m={2}>{p.title}</Heading>
    );
}
export default ResumeHeading;
