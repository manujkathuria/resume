import type {AppProps} from 'next/app'
import {ChakraProvider} from '@chakra-ui/react'
import "@fontsource/montserrat/500.css";
import "@fontsource/poppins";
import theme from "../styles";

function App({Component, pageProps}: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default App;
