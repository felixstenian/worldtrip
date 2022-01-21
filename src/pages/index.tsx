import { Box, Flex, HStack, Image, List, ListItem, Stack, Text, UnorderedList, useBreakpointValue } from "@chakra-ui/react";
import { Header } from "../components";

export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
    lg: true
  })

  return (
    <Flex  justifyContent='center' flexDir='column'>
      <Header />
      <Flex w='100%' flexDir='column'>
        <Box 
          h={368.21}
          justify='space-between'
          __css={{
            bgImage:
              "url(/Background.png)",
            bgSize: "cover",
          }}
        >
          <Flex align='center' justify={[ 'space-between', 'space-evenly']} px={10}>
            <Stack spacing={3} maxWidth={524} h={368.21} justify='center'>
              <Text color='text.light' fontWeight={500} fontSize={36} lineHeight='54px'>
                5 Continentes,
                <br />
                infinitas possibilidades.
              </Text>

              <Text color='info.light' fontSize={20} lineHeight='30px'>
                Chegou a hora de tirar do papel a viagem que você sempre sonhou.
              </Text>
            </Stack>

            { isWideVersion &&
              <Flex >
                <Image src='/Airplane.png' alt='Airplane' pt={100} w={['95%', '100%']} />    
              </Flex>
            }

          </Flex>
        </Box>

        <Flex mt={75} justify='center'>
          <UnorderedList 
            color='highlight' 
            fontSize={30} 
            display='flex' 
            flexWrap='wrap' 
            justifyContent='center' 
            align='center'
            __css={{
              listStyleType: isWideVersion  && 'none',
              listStyle: isWideVersion  && 'none',
            }}
          >
            <ListItem mx={6} justifyContent='center' textAlign='center' align='center'> 
              { isWideVersion && <Image src='/cocktail.png' alt='cocktail' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>vida noturna</Text>
            </ListItem>

            <ListItem mx={6} >
              { isWideVersion && <Image src='/surf.png' alt='surf' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>praia</Text>
            </ListItem>

            <ListItem mx={6} >
              { isWideVersion && <Image src='/building.png' alt='building' px={10} />   }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>moderno</Text>
            </ListItem>

            <ListItem mx={6} >
              { isWideVersion && <Image src='/museum.png' alt='museum' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>clássico</Text>
            </ListItem>

            <ListItem mx={6} >
              { isWideVersion && <Image src='/earth.png' alt='earth' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>e mais...</Text>
            </ListItem>
          </UnorderedList>
        </Flex>
      </Flex>
    </Flex> 
  )
}
