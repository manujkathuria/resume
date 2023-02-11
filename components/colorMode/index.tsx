import * as React from "react"
import {IconButton, IconButtonProps, useColorMode, useColorModeValue,} from "@chakra-ui/react"
import {FaMoon, FaSun} from "react-icons/fa"

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">

export const ToggleColorMode: React.FC<ColorModeSwitcherProps> = (props) => {
    const {toggleColorMode} = useColorMode()
    const text = useColorModeValue("dark", "light")
    const SwitchIcon = useColorModeValue(FaMoon, FaSun)

    return (
        <IconButton

            size="md"
            fontSize="lg"
            variant="ghost"
            color={useColorModeValue("gray.600", "yellow")}
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon/>}
            aria-label={`Switch to ${text} mode`}
            {...props}
        />
    )
}
