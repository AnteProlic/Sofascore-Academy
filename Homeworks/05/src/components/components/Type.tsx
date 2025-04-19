import { Container } from "../../../styled-system/jsx"

function Type({type}: {type: string}) {
    return <Container 
    textTransform="uppercase" 
    borderRadius="md" 
    w="fit"
    paddingX="md"
    paddingY="xs"
    h="fit" 
    alignContent="center" 
    textAlign="center" 
    color="white" 
    fontSize="75%"
    background={`type.fire`}
    >{type}</Container>
}

export default Type