import TechStack from "../components/tech-stack";
import Experience from "../components/experience";
import Education from "../components/education";
import Hero from "../components/hero";
import {Box, useMediaQuery, VStack} from "@chakra-ui/react";
import About from "../components/about";
import Head from 'next/head'

export default function Home() {
    const [isSmallDisplay] = useMediaQuery('(max-width: 800px)')

    return (
        <>
            <Head>
                <title>Resume - Manuj</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Hero/>
            <VStack align={"stretch"} spacing={8} px={isSmallDisplay ? "4%" : "20%"} m={8}>
                <About/>
                <TechStack/>
                <Experience/>
                <Education/>
                <Box py={2}/>
            </VStack>
        </>
    )
}
