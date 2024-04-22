import {
    Text,
    Flex,
    Box
} from '@chakra-ui/react';

const Employees = () => {
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
                    Employees
                </Text>
            </Box>

            <Flex
                bg={'#e5e5e5'}
                padding={4}
                height={'100%'}
            >
                Peter helo
            </Flex>
        </Box>
    )
}

export default Employees