import { Flex } from "../../styled-system/jsx"
import { Pokemon } from "../interface"
import { styled } from "../../styled-system/jsx"

function Card({id, name, hp, height, weight, types, img_url, front_url, back_url}: Pokemon) {
    return (
        <Flex direction={id%2==0?"row-reverse":"row"}>
            <Flex background="background.image" w="50%" h="516px" direction={id%2==0?"row":"row-reverse"} alignItems="center">
              <styled.img src={img_url} w="400px" h="400px" margin="0 60px"/>
            </Flex>
            <Flex direction="column" justifyContent="center" w="50%" paddingLeft="60px">
              <styled.span h="48px">#{id} {name}</styled.span>
              <Flex gap="xl">
                <Flex direction="column" w="280px" h="200px" gap="2xs">
                  <styled.span>
                    <styled.b>Health Points:</styled.b> {hp}
                  </styled.span>
                  <styled.span>
                    <styled.b>Height:</styled.b> {height}
                  </styled.span>
                  <styled.span>
                    <styled.b>Weight:</styled.b> {weight}
                  </styled.span>
                  <Flex>
                    <styled.span>
                      <styled.b>Type:</styled.b>
                      {types.map(type => {
                        return type.type
                      })}
                    </styled.span>
                  </Flex>
                  <styled.span>
                    <styled.b>Details:</styled.b> wait
                  </styled.span>
                </Flex>
                <Flex direction="column" w="340px" h="200px" gap="sm">
                  <styled.b>Full view:</styled.b>
                  <Flex gap="xl">
                    <styled.img src={front_url} w="160px" h="160px"/>
                    <styled.img src={back_url} w="160px" h="160px"/>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
    )
}

export default Card