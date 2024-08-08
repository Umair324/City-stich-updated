import { AddIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import {
    Text,
    Flex,
    Box,
    Stack,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Input,
    Grid,
    GridItem,
    VStack,
    Checkbox
} from '@chakra-ui/react';
const TextOption={
fontWeight: "600",
};
const inputOptions ={
  outline: "none",
  onoffline:"none",
};

const Employees = () => {
    const [showGrid, setShowGrid] = useState(false);

    const handleClickButton = () => {
        setShowGrid(!showGrid);
    }

    return (
        <Box height={'100%'}>
            <Box bg='white' padding={8}>
                <Text fontFamily={'gothicBold'} fontSize={16}>
                    Employees
                </Text>
            </Box>

            <Stack bg={'#e5e5e5'} padding={4} height={'auto'}>
                <Flex width={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize={'20px'} fontWeight={'bolder'}>
                        Employees
                    </Text>
                    <Button onClick={handleClickButton} leftIcon={<AddIcon />}>
                        New Employee
                    </Button>
                </Flex>
                {showGrid && (
                    <VStack maxWidth={'100%'} height={'auto'} bg={'white'} p={'10px'}>
                        <Grid templateColumns='repeat(3, 1fr)' gap={6} height={'auto'} padding={'6'} py={'10'} w={'100%'}>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Name</Text>
                                <Input />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text
                                {...TextOption}
                                >Father Name</Text>
                                <Input />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Number</Text>
                                <Input type='number' />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Address</Text>
                                <Input />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>WhatsApp</Text>
                                <Input type='number' />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Email</Text>
                                <Input {...inputOptions}/>
                            </GridItem>
                        </Grid>
                        <Flex width={'100%'} alignItems={'right'} justifyContent={'right'} gap={'10px'}>
                            <Box>
                                <Button width={'120px'} colorScheme={'blue'} color={'white'} outline={'none'} right={'15px'}>
                                    Save
                                </Button>
                                <Button width={'120px'} colorScheme={'blue'} color={'white'} outline={'none'} right={'10px'}>
                                    Search
                                </Button>
                            </Box>
                        </Flex>
                    </VStack>
                )}
                <Stack bg={'white'}>
                    <Text fontSize={'20px'} fontWeight={'bold'} padding={'8'}>
                        Employees
                    </Text>
                    <TableContainer>
                        <Table size='lg'>
                            <Thead>
                                <Tr textAlign={'center'}>
                                    <Th><Checkbox /></Th>
                                    <Th>Id</Th>
                                    <Th>Name</Th>
                                    <Th>Suits Given</Th>
                                    <Th>Pending</Th>
                                    <Th>Suits Sewed</Th>
                                </Tr>
                            </Thead>
                            <Tbody textAlign={'center'}>
                                <Tr>
                                    <Td><Checkbox /></Td>
                                    <Td>01</Td>
                                    <Td>Umair Rind</Td>
                                    <Td >12</Td>
                                    <Td >4</Td>
                                    <Td>8</Td>
                                    
                                </Tr>
                                <Tr>
                                    <Td><Checkbox /></Td>
                                    <Td>01</Td>
                                    <Td>Umair Rind</Td>
                                    <Td>12</Td>
                                    <Td>4</Td>
                                    <Td>8</Td>
                                </Tr>
                                <Tr>
                                    <Td><Checkbox /></Td>
                                    <Td>01</Td>
                                    <Td>Umair Rind</Td>
                                    <Td>12</Td>
                                    <Td>4</Td>
                                    <Td>8</Td>
                                </Tr>
                                <Tr>
                                    <Td><Checkbox /></Td>
                                    <Td>01</Td>
                                    <Td>Umair Rind</Td>
                                    <Td>12</Td>
                                    <Td>4</Td>
                                    <Td>8</Td>
                                </Tr>
                                <Tr>
                                    <Td><Checkbox /></Td>
                                    <Td>01</Td>
                                    <Td>Umair Rind</Td>
                                    <Td >12</Td>
                                    <Td >4</Td>
                                    <Td >8</Td>
                                </Tr>
                                <Tr>
                                    <Td><Checkbox /></Td>
                                    <Td>01</Td>
                                    <Td>Umair Rind</Td>
                                    <Td>12</Td>
                                    <Td>4</Td>
                                    <Td>8</Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Box>
    );
}

export default Employees;
