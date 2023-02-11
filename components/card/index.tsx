import {VStack} from "@chakra-ui/react";
import React from "react";

interface ChildProps {
    children?: JSX.Element | JSX.Element[]
}

const Card = ({children}: ChildProps): JSX.Element => {
    return (
        <VStack align={"stretch"} shadow={"sm"} p={4} bg={"rgba(255, 255, 255, 0.5)"} rounded={"lg"}>
            {children}
        </VStack>
    )
}

export default Card;