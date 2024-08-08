import {
    Text,
    Flex,
    Box,
    Stack,
    Avatar,
    Img,
    Image,
    HStack,
    Input,
    Button,
    
} from '@chakra-ui/react';
import img from '../../assets/kid_1.png'
import img2 from '../../assets/kid_2.png'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Payments = () => {
    const [showGrid , setShowGrid] = useState(false);

    const handleClickButton =() =>{
        setShowGrid(!showGrid);
    }
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
                    Payments
                </Text>
            </Box>

            <Flex
                bg={'#e5e5e5'}
                padding={4}
                height={'100%'}
            >
          <Stack width={'100%'} height={'auto'} bg={'white'}>
            <HStack minW={'100%'} padding={'24px'}>
                   <HStack width={'100%'}>
                   <Text
                   fontWeight={'800'}
                   fontSize={'16px'}
                   >Customers</Text>
                  <Button 
                   width={'230px'}
                   height={'30px'}
                   variant={'ghost'}
                   colorScheme='wheat'
                   boxShadow={'0 0 3px rgba(0, 0, 0, 0.1)'}
                   leftIcon={<SearchIcon/>}
                    >
               <Input
  outline="none"
  background="transparent"
  cursor={'pointer'}
  height="30px"
  border={'none'}
  width="200px"
  placeholder="Search Customer"
  _focus={{ boxShadow: "none", outline: "none" }}
/>
                    
                  </Button>
                   
                   </HStack>
                   <Button
                   height={'40px'}
                   leftIcon={<AddIcon />}
                   onClick={handleClickButton}
                   >Add</Button>
                </HStack>  

               {showGrid&&(
                <HStack width={'100%'} height={'auto'}>
                <Input  />
                <Input />
                <Input />
                <Input />
                <Input />
               </HStack>
               )} ;
          <TableContainer>
          <Table size="lg">
  <Thead>
    <Tr>
      <Th>Customer Name</Th>
      <Th>Customer ID</Th>
      <Th>Number</Th>
      <Th>Advance</Th>
      <Th>Remaining</Th>
    </Tr>
  </Thead>
  <Tbody>
    <Tr>
      <Td>Umair</Td>
      <Td>12345</Td>
      <Td>25.4</Td>
      <Td>500</Td>
      <Td>100</Td>
    </Tr>
    <Tr>
      <Td>
      Ali
      </Td>
      <Td>67890</Td>
      <Td>30.0</Td>
      <Td>600</Td>
      <Td>150</Td>
    </Tr>
    <Tr>
      <Td>
      Sara
      </Td>
      <Td>11223</Td>
      <Td>45.5</Td>
      <Td>700</Td>
      <Td>200</Td>
    </Tr>
  </Tbody>
</Table>

</TableContainer>
          </Stack>
            </Flex>
        </Box>
    )
}

export default Payments