import React, {ReactNode} from 'react';
import {Button} from "@chakra-ui/react";

const SocialButton = ({
                          children,
                          href,
                      }: {
    children: ReactNode;
    href: string;
}) => {
    return (
        <Button
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: "blackAlpha.200"
            }}>
            {children}
        </Button>
    );
};

export default SocialButton;