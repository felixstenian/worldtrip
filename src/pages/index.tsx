import { Box, Flex, Text } from "@chakra-ui/react";
import { Header } from "../components";

export default function Home() {
  return (
    <Box align='center' justifyContent='center'>
      <Header />
      <Text fontSize={32} fontWeight={700}>World trip</Text>
    </Box> 
  )
}
