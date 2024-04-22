import { useState } from 'react';
import {
  Flex,
  Text,
  Image,
} from '@chakra-ui/react';

const Instruction = () => {
  const [instruction, setInstruction] = useState("placeholder instruction before being fetched from the api");
  return (
    <Flex
      maxW={'236px'}
      minW={'100px'}
      bg={'primary.500'}
      padding={4}
      direction={'column'}
      alignItems={'center'}
    >
        <Image 
          src={require("../../assets/svgs/book-white.svg").default}
          width={'42px'}
          height={'42px'}
          marginBottom={4}
        />
        <Text
          color={'white'}
          fontFamily={'gothicBold'}
          fontSize={32}
          borderBottom="1px solid white"
          marginBottom={4}
        >
          Instructions
        </Text>

        <Text
          color={'white'}
          fontFamily={'gothic'}
          fontSize={14}
          marginBottom={4}
        >
          {instruction}
        </Text>
    </Flex>
  )
}

export default Instruction;