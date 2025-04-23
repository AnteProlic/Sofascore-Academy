import { Container } from "../../../styled-system/jsx"
import { Token, token } from "../../../styled-system/tokens"
import { css } from "../../../styled-system/css"
import { CSSProperties } from "react";

const Type = (props: {type: string}) => {
    const {type} = props;

    const containerStyle: CSSProperties & { '--bgcolor'?: string } = {
        '--bgcolor': token(`colors.type.${type}` as Token)
    }

    return ( 
        <Container 
          className={css({
            backgroundColor: 'var(--bgcolor)'
          })}
          style={containerStyle}
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
        >
          {type}
        </Container>
      )
    }

export default Type