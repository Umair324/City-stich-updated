import React from 'react';
import { Checkbox, Flex } from '@chakra-ui/react';

const CustomCheckbox = ({ label }) => {
  return (
    <Flex
      fontFamily="gothicBold"
      fontSize="14px"
      fontWeight="500"
      color="#000"
      justifyContent={'space-between'}
      paddingX={1}
      height={'48px'}
      alignItems={'center'}
      border={'0.8px solid #CBD5E0'}
    >
      <Checkbox size="lg" colorScheme="blue" /> {/* Add size and color scheme */}
      <span>{label}</span> {/* Use a span for the label */}
    </Flex>
  );
};

export default CustomCheckbox;
