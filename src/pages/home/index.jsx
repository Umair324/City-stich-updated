import { useState } from 'react';
import {
  Box,
  Text,
  Flex
} from "@chakra-ui/react";
import Sidebar from "../../components/sidebar";
import Dashboard from '../../components/dashboard';
import Profile from '../../components/profile';
import TermsAndConditions from '../../components/terms';
import Measurement from '../../components/measurement';
import Employees from '../../components/employees';
import Payments from '../../components/payments';
import Requests from '../../components/requests';
import Measurements from '../../components/profile';

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <Flex h={'100vh'}>
      <Box h={'100%'} w={'300px'}>
        <Sidebar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
      <Box flex={1}>
        {currentPage === 1 && <Dashboard />}
        {currentPage === 2 && <Measurements />}
        {currentPage === 3 && <Employees />}
        {currentPage === 4 && <Payments />}
        {currentPage === 5 && <Requests />}
        {currentPage === 6 && <Profile />}
        {currentPage === 7 && <TermsAndConditions />}
      </Box>
    </Flex>
  )
}

export default HomePage;