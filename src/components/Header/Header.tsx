import { Flex, Icon, Image } from "@chakra-ui/react";
import { IoIosArrowBack } from 'react-icons/io'

const Header = () => {
  return (
    <Flex h={100} justify='center' align='center'>
      <Icon as={IoIosArrowBack} position='absolute' left={150} fontSize={32} />
      <Image src='/Logo.png' alt='World trip Logo' w={184.06} h={45.92} />
    </Flex>
  );
};

export default Header