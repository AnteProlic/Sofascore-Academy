import { useEffect, useState } from "react";
import { styled } from "../../styled-system/jsx"

export const SafeImage = ({ src, placeholder="/loading.gif", alt }: { src: string, placeholder?: string, alt: string }) => {
    const [imgSrc, setImgSrc] = useState<string>(placeholder)
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (!src) {
            setImgSrc(placeholder);
            return;
        }

        setLoading(true);
        
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setImgSrc(src);
            setLoading(false);
        };

        img.onerror = () => {
            setImgSrc(placeholder);
            setLoading(false);
        };

        return () => {
            img.onload = null;
            img.onerror = null;
        };
    }, [src, placeholder]);

    return <styled.img
            borderRadius="sm"
            objectFit="cover"
            h="100%"
            w="100%"
            alt={alt}
            src={imgSrc}
            opacity={loading ? 0.5 : 1}
            transition="opacity 0.3s ease"
        />
}