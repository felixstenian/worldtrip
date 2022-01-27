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

const Carousel = () => {
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
          {dataCarousel?.map((continent, index) => (
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
                      `url(${continent?.image || EMPTY_IMG })`,
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
                    <Text fontSize={[24, 48]} lineHeight={['36px', '72px']} fontWeight={700} color='text.light'>{continent.continent}</Text>
                    <Text fontSize={[14, 24]} lineHeight={['21px', '36px']} fontWeight={700} color='info.light'>{continent.description || ''}</Text>
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