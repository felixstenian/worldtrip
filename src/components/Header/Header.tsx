import { Flex, Icon, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => {
  const { pathname } = useRouter()

  return (
    <Flex h={100} justify='center' align='center'>
      { pathname !== '/' && 
        <Link href='/' passHref>
          <Icon 
            as={IoIosArrowBack} 
            position='absolute' 
            left={150} 
            fontSize={32} 
            _hover={{
              cursor: 'pointer'
            }}
          />
        </Link> 
      }
      <Image src='/Logo.png' alt='World trip Logo' w={184.06} h={45.92} />
    </Flex>
  );
};

export default Header