import Image, {StaticImageData} from 'next/image';
import { useState } from 'react';
import {Box} from "@chakra-ui/react";

type ImageProps = {
    src: StaticImageData;
    alt: string;
};

const ZoomableImage = ({ src, alt }: ImageProps) => {
    const [isZoomed, setIsZoomed] = useState(false);

    const toggleZoom = () => setIsZoomed(!isZoomed);

    return (
        <div onClick={toggleZoom} style={{ cursor: 'zoom-in' }}>
            <Image
                src={src}
                alt={alt}
                width={200}
                height={200}
            />
            {isZoomed && (
                <>
                    <Box>Hello</Box>
                <div
                    onClick={toggleZoom}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 9999,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'zoom-out',
                    }}
                >
                    <Image
                        src={src}
                        alt={alt}
                        layout="intrinsic"
                        objectFit="contain"
                    />
                </div>
                </>
            )}
        </div>
    );
};

export default ZoomableImage;
