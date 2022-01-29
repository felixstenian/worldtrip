import {
  Box, 
  Divider, 
  Flex, 
  Image, 
  ListItem, 
  Stack, 
  Text, 
  UnorderedList, 
  useBreakpointValue 
} from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Carousel, Header } from "../components";

interface ContinentProps {
  slug: string;
  name: string;
  subTitle: string;
  img: string;
  description: string;
  countries: number;
  languages: number;
  citiesNum: number;
  citiesPlus: [
    {
      city: string;
      capital: string;
      flag: string;
      img: string;
    }
  ]
}
interface HomeProps {
  continents: ContinentProps[]
}

const Home = ({ continents }: HomeProps) => {
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
              listStyleType: !isWideVersion  ? 'initial' : 'none',
              listStyle: !isWideVersion  ? 'initial' : 'none',
            }}
          >
            <ListItem mx={6} justifyContent='center' textAlign='center' align='center'> 
              { !!isWideVersion && <Image src='/cocktail.png' alt='cocktail' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>vida noturna</Text>
            </ListItem>

            <ListItem mx={6} >
              { !!isWideVersion && <Image src='/surf.png' alt='surf' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>praia</Text>
            </ListItem>

            <ListItem mx={6} >
              { !!isWideVersion && <Image src='/building.png' alt='building' px={10} />   }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>moderno</Text>
            </ListItem>

            <ListItem mx={6} >
              { !!isWideVersion && <Image src='/museum.png' alt='museum' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>clássico</Text>
            </ListItem>

            <ListItem mx={6} >
              { !!isWideVersion && <Image src='/earth.png' alt='earth' px={10} /> }
              <Text mt={8} fontWeight={[500, 600]} fontSize={[18, 24]} lineHeight={['27px', '36px']} color='text.dark'>e mais...</Text>
            </ListItem>
          </UnorderedList>
        </Flex>

        <Box align='center' justify='center' mt='100px'>
          <Divider w='90px' border='2px' borderColor='text.dark' />
        </Box>

        <Box align='center' justify='center' mt='80px'>
          <Text fontWeight={500} fontSize={36} lineHeight='54px'>Vamos nessa?</Text>
          <Text fontWeight={500} fontSize={36} lineHeight='54px'>Então escolha seu continente</Text>
        </Box>
      </Flex>

      <Flex align='center' justify='center' py={50}>
        <Box maxWidth='1240' w='100%'>
          <Carousel continents={continents} />
        </Box>
      </Flex>
    </Flex> 
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('http://localhost:3000/continents')
  const continents = await response.json()

  return {
    props: {
      continents
    }
  }
}

export default Home