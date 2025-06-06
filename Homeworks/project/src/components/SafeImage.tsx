import { useState } from "react";
import { styled } from "../../styled-system/jsx"

export const SafeImage = ({ src, placeholder, alt }: { src: string, placeholder: string, alt: string }) => {
    const [error, setError] = useState(false)

    return <styled.img
        borderRadius="sm"
        objectFit="cover"
        h="100%"
        alt={alt}
        src={error?placeholder:src}
        onError={() => setError(true)}
    />
}