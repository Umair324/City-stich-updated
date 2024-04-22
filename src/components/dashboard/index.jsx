import {
  Text,
  Flex,
  Box
} from '@chakra-ui/react';
import Instruction from '../instruction';
import Card from '../card';

const Dashboard = () => {
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
          DASHBOARD
        </Text>
      </Box>

      <Flex 
        bg={'#e5e5e5'}
        padding={4}
        height={'100%'}
      >
        <Box 
          flex={1}
          display={'grid'}
          gridTemplateColumns= "repeat(12, 1fr)"
          gridTemplateRows= "repeat(3, 1fr)"
          gridColumnGap="10px"
          gridRowGap="10px"
        >
          <Card 
            label="Total Product Sold"
            value={48}
            gridArea='1 / 1 / 2 / 5'
          />
          <Card 
            label="Total Product Stock (yet to be sold)"
            value={25}
            gridArea='1 / 5 / 2 / 9'
          />
          <Card 
            label="Total Products Donated to Charity"
            value={25}
            gridArea='1 / 9 / 2 / 13'
          />

          <Card 
            label="Value of stock yet to be Sold"
            value={"& 20,000 GBP"}
            gridArea='2 / 1 / 3 / 7'
          />
          <Card 
            label="Total Contribution to Charity"
            value={"& 20,000 GBP"}
            gridArea='2 / 7 / 3 / 13'
          />

          <Card 
            label="Amount paid to date"
            value={"& 20,000 GBP"}
            gridArea='3 / 1 / 4 / 7'
          />
          <Card 
            label="Payments to be made"
            value={"& 20,000 GBP"}
            gridArea='3 / 7 / 4 / 13'
          />
        </Box>
      </Flex>
    </Box>
  )
}

export default Dashboard;