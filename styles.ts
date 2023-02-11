import {mode} from "@chakra-ui/theme-tools";
import {Dict} from "@chakra-ui/utils";


import {extendTheme} from "@chakra-ui/react";

const config = {
    styles: {
        global: (props: Dict) => ({
            body: {
                color: mode('gray.700', 'gray.300')(props),
                bg: mode('gray.100', 'gray.800')(props),
                fontSize: '15px',
            },
            ':root': {
                '--chakra-colors-common-body_bg': mode(
                    "#EDF2F7", // gray.100
                    '#1A202C', // gray.800
                )(props),
            },
        }),
    },
    fonts: {
        heading: `'Montserrat', monospace`,
        body: `'Poppins', sans-serif`,
    },
    colors: {
        common: {
            body_bg: "",
        },
    },
}

const theme = extendTheme(config)

export default theme;
