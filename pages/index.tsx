import TechSkills from "../modules/tech-skills";
import Experience from "../modules/experience";
import Education from "../modules/education";
import Hero from "../modules/hero";
import {Box, useMediaQuery, VStack} from "@chakra-ui/react";
import Profile from "../modules/profile";
import Head from 'next/head'
import ZoomableImage from "../components/zoomableImage";
import mypic from '../asset/test.jpeg'
import Simple from "../modules/projects";
import Certifications from "../modules/certifications";


export default function Home() {
    const [isSmallDisplay] = useMediaQuery('(max-width: 800px)')

    return (
        <>
            <Head>
                <title>Resume - Manuj</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            </Head>
            <Hero/>
            <VStack
                align={"stretch"}
                spacing={8}
                px={isSmallDisplay ? "4%" : "15%"}
                py={4}
                bg={"common.menu_bg"}
                bgGradient={`linear(to-r,rgba(250,245,255,0.3),gray.200,rgba(250,245,255,0.2))`}
            >
                <Profile/>
                <TechSkills/>
                <Experience/>
                <Education/>
                <Box py={2}/>
            </VStack>
        </>
    )
}
