import {
    Text,
    Flex,
    Box
} from '@chakra-ui/react';

const Requests = () => {
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
                    Requests
                </Text>
            </Box>

            <Flex
                bg={'#e5e5e5'}
                padding={4}
                height={'100%'}
            >
                Requests
            </Flex>
        </Box>
    )
}

export default Requests