import {
  Text,
  Flex,
  Box
} from '@chakra-ui/react';
import Instruction from '../instruction';

const TermsAndConditions = () => {
  return (
    <Box height={'100%'}>
      <Box
        bg='white'
        padding={8}
      >
        <Text
          fontFamily={'gothicBold'}
          fontSize={16}
          textTransform={'uppercase'}
        >
          Terms and Conditions
        </Text>
      </Box>

      <Flex 
        bg={'#e5e5e5'}
        padding={4}
        height={'100%'}
      >
        <Box 
          flex={1} 
          bg={'white'}
          padding={6}
        >
          <Text
            fontFamily={'gothicBold'}
            fontSize={20}
            textTransform={'uppercase'}
          >
            SELLER’S TERMS AND CONDITIONS
          </Text>
          <Text
            fontFamily={'gothic'}
            fontSize={16}
            lineHeight={8}
            marginBottom={8}
          >
            Suspends aliquot interdorm deque, a dictum olio facilizes nec. 
Nula pharetra sagittal qualm a molestee. Sed dolor mauri's, locus id protium a, abaculis nec lectors. 
Suspends potent. In varies sem sed orca Bibendum locus. Cu abitur dictum sem felids, in tempus sapient interdorm nec.
          </Text>

          <Text
            fontFamily={'gothicBold'}
            fontSize={20}
            textTransform={'uppercase'}
          >
            REGISTRATION
          </Text>
          <Text
            fontFamily={'gothic'}
            fontSize={16}
            lineHeight={8}
            marginBottom={8}
          >
            Suspends aliquot interdorm deque, a dictum olio facilizes nec. 
Nula pharetra sagittal qualm a molestee. Sed dolor mauri's, locus id protium a, abaculis nec lectors. 
Suspends potent. In varies sem sed orca Bibendum locus. Cu abitur dictum sem felids, in tempus sapient interdorm nec. 
          </Text>

          <Text
            fontFamily={'gothicBold'}
            fontSize={20}
            textTransform={'uppercase'}
          >
            PAGE
          </Text>
          <Text
            fontFamily={'gothic'}
            fontSize={16}
            lineHeight={8}
            marginBottom={8}
          >
            Suspends aliquot interdorm deque, a dictum olio facilizes nec. 
Nula pharetra sagittal qualm a molestee. Sed dolor mauri's, locus id protium a, abaculis nec lectors. 
Suspends potent. In varies sem sed orca Bibendum locus. Cu abitur dictum sem felids, in tempus sapient interdorm nec.
          </Text>
        </Box>
      </Flex>
    </Box>
  )
}

export default TermsAndConditions;