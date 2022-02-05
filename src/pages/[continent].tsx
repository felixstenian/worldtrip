import { GetServerSideProps } from 'next';
import { Box, Flex, Image, Text, Icon, Tooltip } from '@chakra-ui/react';

import { Header } from '../components';
interface ContinentDataProps {
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
interface ContinentProps {
  continent: ContinentDataProps
}

const Continent = ({ continent }: ContinentProps) => {
  return (
    <Flex  justifyContent='center' flexDir='column'>
      <Header />
      <Flex w='100%' flexDir='column'>
        <Flex
         h={500}
         __css={{
           bgImage:
             `url(${continent?.img})`,
           bgSize: "cover",
         }}
        >
          <Flex h='100%' w='100%' justify={['center', 'flex-start']} align={['center', 'flex-end']}>
            <Text ml={[0, 70, 140]} mb={[0, 59]} color='text.light' fontSize={48} lineHeight='72px' fontWeight={600} >{continent?.name}</Text>
          </Flex>
        </Flex>

        <Flex flexDir={['column', 'column', 'column', 'row']} mx={[5, 10, 20, 30, 140]} my={[25, 75]}>
          <Box w={['100%', '100%', '100%', '50%']}>
            <Text fontSize={[14, 24]} lineHeight={['21px', '36px']} textAlign='justify'>
              {continent?.description}
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
                {continent?.countries}
              </Text>
              <Text color='text.dark' fontSize={[18, 24]} lineHeight={['27px', '36px']} fontWeight={600}>
                países
              </Text>
            </Flex>

            <Flex flexDir='column' justify='center' align='center'>
              <Text color='highlight' fontSize={[24, 48]} lineHeight={['36px', '72px']} fontWeight={600}>
                {continent?.languages}
              </Text>
              <Text color='text.dark' fontSize={[18, 24]} lineHeight={['27px', '36px']} fontWeight={600}>
                línguas
              </Text>
            </Flex>

            <Flex flexDir='column' justify='center' align='center'>
              <Text color='highlight' fontSize={[24, 48]} lineHeight={['36px', '72px']} fontWeight={600}>
                {continent?.citiesNum}
              </Text>
              <Flex align='center'>
                <Text color='text.dark' fontSize={[18, 24]} lineHeight={['27px', '36px']} fontWeight={600} mr={1}>
                  cidades +100
                </Text>
                <Tooltip label="São as cidades deste continente que estão entre as 100 cidades mais visitadas do mundo." aria-label='A tooltip'>
                  <Icon fontSize={20} color='gray.150' />
                </Tooltip>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDir='column' pl={[5, 5, 5, 140]} my={[30, 75]} >
          <Text fontSize={36} lineHeight='54px' fontWeight={500} color='text.dark'>
            Cidades +100
          </Text>

          <Flex flexWrap={['wrap']} justify={['center', 'center', 'center', 'flex-start']} align='center'>
            {continent?.citiesPlus?.map(city => (
              <Box key={city.city} border='1px solid' borderColor='rgba(255, 186, 8, 0.5)' borderRadius={4} mr={[5]} my={5}>
                <Image src={city.img} alt='Foto' w={256} h={173} />
                <Flex justify='space-around' align='center' py={5}>
                  <Box>
                    <Text>{city.city}</Text>
                    <Text>{city.capital}</Text>
                  </Box>
                  <Box>
                    <Image src={city.flag} alt='bandeira'  w={30}  border='1px solid #dedede' />
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetch(`http://localhost:3000/continents?slug=${params.continent}`)
  const continent = await response.json()

  return {
    props: {
      continent: continent[0] || []
    }
  }
}

export default Continent