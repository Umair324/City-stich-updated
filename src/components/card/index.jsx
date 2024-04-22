import {
  Flex,
  Text
} from '@chakra-ui/react';

const Card = ({label, value, gridArea}) => {
  return (
    <Flex
      gridArea={gridArea}
      direction={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      bg={'white'}
    >
      <Text
        fontFamily={'gothic'}
        fontSize={16}
        textAlign={'center'}
      >
        {label}
      </Text>
      <Text
        fontFamily={'gothicBold'}
        fontSize={16}
      >
        {value}
      </Text>
    </Flex>
  )
}

export default Card;