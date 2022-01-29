import SwiperCore, { Navigation, Pagination, Keyboard } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"

import { Box, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

SwiperCore.use([Navigation, Pagination, Keyboard])

const EMPTY_IMG = 'Background.png'

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
interface CarouselProps {
  continents: ContinentProps[]
}

const Carousel = ({ continents }: CarouselProps) => {
  const dataCarousel = [
    {
      continent: 'América do Norte',
      image: '',
      description: '',
      slug: 'america-do-norte'
    },
    {
      continent: 'América do Sul',
      image: '',
      description: '',
      slug: 'america-do-sul'
    },
    {
      continent: 'Ásia',
      image: '',
      description: '',
      slug: 'asia'
    },
    {
      continent: 'África',
      image: '',
      description: '',
      slug: 'africa'
    },
    {
      continent: 'Europa',
      image: 'Continent_Image.png',
      description: 'O continente mais antigo.',
      slug: 'europa'
    },
    {
      continent: 'Oceania',
      image: '',
      description: '',
      slug: 'oceania'
    }
  ]
  return (
    <>
      <Swiper cssMode={false} navigation={true} pagination={true} keyboard={true}>
        {continents?.map((continent, index) => (
          <SwiperSlide
            key={index}
            
          >
            <Link
              href={`/${continent.slug}`}
              passHref
            >
              <Box
                __css={{
                  bgImage:
                    `url(${continent?.img || EMPTY_IMG })`,
                   bgSize: "cover",
                }}
                _hover={{
                  cursor: 'pointer'
                }}
              >
                <Flex
                  flexDir='column'
                  align='center' 
                  justifyContent='center'
                  h={[250, 450]}
                >
                  <Text fontSize={[24, 48]} lineHeight={['36px', '72px']} fontWeight={700} color='text.light'>{continent.name}</Text>
                  <Text fontSize={[14, 24]} lineHeight={['21px', '36px']} fontWeight={700} color='info.light'>{continent.subTitle || ''}</Text>
                </Flex>
              </Box>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel