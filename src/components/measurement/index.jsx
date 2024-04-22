import {
    Text,
    Flex,
    Box
  } from '@chakra-ui/react';
  import Instruction from '../instruction';
  import Card from '../card';
  
  const Measurement = () => {
    return (
      <Box height={'100%'}>
        <Box
          bg='white'
          padding={8}
        >
          <Text
            fontFamily={'gothicBold'}
            fontSize={16}
          >
            Measurement
          </Text>
        </Box>
  
        <Flex 
          bg={'#e5e5e5'}
          padding={4}
          height={'100%'}
        >
        Peter
        </Flex>
      </Box>
    )
  }
  
  export default Measurement;