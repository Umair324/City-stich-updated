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

const TextOption = {
    fontWeight: "600",
};

const Employees = () => {
    const [showGrid, setShowGrid] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        number: "",
        address: "",
        whatsapp: "",
        email: ""
    });
    const [employees, setEmployees] = useState([]);

    const handleClickButton = () => {
        setShowGrid(!showGrid);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        setEmployees([...employees, formData]);
        setFormData({
            name: "",
            fatherName: "",
            number: "",
            address: "",
            whatsapp: "",
            email: ""
        });
        setShowGrid(false);
    };

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
                                <Input name='name' value={formData.name} onChange={handleInputChange} />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Father Name</Text>
                                <Input name='fatherName' value={formData.fatherName} onChange={handleInputChange} />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Number</Text>
                                <Input name='number' type='number' value={formData.number} onChange={handleInputChange} />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Address</Text>
                                <Input name='address' value={formData.address} onChange={handleInputChange} />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>WhatsApp</Text>
                                <Input name='whatsapp' type='number' value={formData.whatsapp} onChange={handleInputChange} />
                            </GridItem>
                            <GridItem w='100%' h='10'>
                                <Text {...TextOption}>Email</Text>
                                <Input name='email' value={formData.email} onChange={handleInputChange} />
                            </GridItem>
                        </Grid>
                        <Flex width={'100%'} alignItems={'right'} justifyContent={'right'} gap={'10px'}>
                            <Box>
                                <Button
                                    width={'120px'}
                                    colorScheme={'blue'}
                                    color={'white'}
                                    onClick={handleSave}
                                >
                                    Save
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
                                    <Th>Father Name</Th>
                                    <Th>Number</Th>
                                    <Th>Address</Th>
                                    <Th>WhatsApp</Th>
                                    <Th>Email</Th>
                                </Tr>
                            </Thead>
                            <Tbody textAlign={'center'}>
                                {employees.map((employee, index) => (
                                    <Tr key={index}>
                                        <Td><Checkbox /></Td>
                                        <Td>{index + 1}</Td>
                                        <Td>{employee.name}</Td>
                                        <Td>{employee.fatherName}</Td>
                                        <Td>{employee.number}</Td>
                                        <Td>{employee.address}</Td>
                                        <Td>{employee.whatsapp}</Td>
                                        <Td>{employee.email}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Box>
    );
};

export default Employees;
