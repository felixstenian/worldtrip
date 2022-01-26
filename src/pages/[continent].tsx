import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { Header } from '../components';

const Continent = () => {
  const { query: { continent } } = useRouter()

  // TODO:
    // Pegar continent
    // Fazer request para mostrar dados

  const mockContinent = {
    continent: 'Europa',
    description: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste',
    countries: 50,
    languages: 60,
    citiesNum: 27,
    cities: [
      {
        city: 'Reino Unido',
        capital: 'Londres',
        flag: ''
      },
      {
        city: 'França',
        capital: 'Paris',
        flag: ''
      },
      {
        city: 'Itália',
        capital: 'Roma',
        flag: ''
      },
      {
        city: 'Republica Tcheca',
        capital: 'Praga',
        flag: ''
      },
      {
        city: 'Holanda',
        capital: 'Amsterdã',
        flag: ''
      }
    ]
  }

  return (
    <Flex  justifyContent='center' flexDir='column'>
      <Header />
      <Flex w='100%' flexDir='column'>
        <Flex
         h={500}
         __css={{
           bgImage:
             "url(/Banner.png)",
           bgSize: "cover",
         }}
        >
          <Flex h='100%' w='100%' justify={['center', 'flex-start']} align={['center', 'flex-end']}>
            <Text ml={[0, 70, 140]} mb={[0, 59]} color='text.light' fontSize={48} lineHeight='72px' fontWeight={600} >{mockContinent.continent}</Text>
          </Flex>
        </Flex>

        <Flex flexDir={['column', 'column', 'column', 'row']} mx={[5, 10, 20, 30, 140]} my={[25, 75]}>
          <Box w={['100%', '100%', '100%', '50%']}>
            <Text fontSize={[14, 24]} lineHeight={['21px', '36px']} textAlign='justify'>
              {mockContinent.description}
            </Text>
          </Box>
          <Flex
            w={['100%', '100%', '100%', '50%']} 
            justify={['space-between', 'space-between', 'space-between', 'space-between']} 
            align='center' 
            ml={[0, 0, 0, 10]} 
            px={10} 
            mt={[10, 10, 10,  0]}
          >
            <Flex flexDir='column' justify='center' align='center'>
              <Text color='highlight' fontSize={[24, 48]} lineHeight={['36px', '72px']} fontWeight={600}>
                {mockContinent.countries}
              </Text>
              <Text color='text.dark' fontSize={[18, 24]} lineHeight={['27px', '36px']} fontWeight={600}>
                países
              </Text>
            </Flex>

            <Flex flexDir='column' justify='center' align='center'>
              <Text color='highlight' fontSize={[24, 48]} lineHeight={['36px', '72px']} fontWeight={600}>
                {mockContinent.languages}
              </Text>
              <Text color='text.dark' fontSize={[18, 24]} lineHeight={['27px', '36px']} fontWeight={600}>
                línguas
              </Text>
            </Flex>

            <Flex flexDir='column' justify='center' align='center'>
              <Text color='highlight' fontSize={[24, 48]} lineHeight={['36px', '72px']} fontWeight={600}>
                {mockContinent.citiesNum}
              </Text>
              <Text color='text.dark' fontSize={[18, 24]} lineHeight={['27px', '36px']} fontWeight={600}>
                cidades +100
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir='column' pl={[5, 5, 5, 140]} my={[30, 75]} >
          <Text fontSize={36} lineHeight='54px' fontWeight={500} color='text.dark'>
            Cidades +100
          </Text>

          <Flex flexWrap={['wrap']} justify={['center', 'center', 'center', 'flex-start']} align='center'>
            {mockContinent?.cities?.map(city => (
              <Box key={city.city} border='1px solid' borderColor='rgba(255, 186, 8, 0.5)' borderRadius={4} mr={[5]} my={5}>
                <Image src='/Foto.png' alt='Foto' />
                <Flex justify='space-around' align='center' py={5}>
                  <Box>
                    <Text>{city.city}</Text>
                    <Text>{city.capital}</Text>
                  </Box>
                  <Box>
                    <Image src='/Ellipse.png' alt='Ellipse' />
                  </Box>
                </Flex>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Continent