import { useEffect, useState } from 'react';
import {
  Flex,
  Text,
  Box,
  Image,
  FormLabel,
  FormControl,
  Switch,
  Button,
  Center,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../../components/carousel';
import CustomInput from '../../components/input/index';
import TextArea from '../../components/textarea';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [postCode, setPostCode] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [cnfmPassword, setCnfmPassword] = useState('');
  const [isRegisterDisabled, setIsRegisterDisabled] = useState(true);

  useEffect(() => {
    if (!(
      firstName &&
      lastName &&
      email && 
      postCode &&
      address &&
      password &&
      cnfmPassword
    )) {
      setIsRegisterDisabled(true)
      return;
    }

    if (password !== cnfmPassword){
      setIsRegisterDisabled(true);
      return
    }

    setIsRegisterDisabled(false);
  }, [firstName, lastName, email, postCode, address, password, cnfmPassword])

  const handleRegister = () => {
    navigate('/login')
  }

  return (
    <Flex>
      <Box flex={1}>
        <Carousel />
      </Box>
      <Box
        flex={1}
        bg={"black"} 
        minW={'482px'}
      >
        <Center height={'100vh'}>
          <Flex 
            alignItems={'center'}
            direction={'column'}
            bg={'grey.500'}
            minW={'462px'}
            padding={4}
            w={'50%'}
          >
            <Image 
              src={require("../../assets/logo.svg").default}
              w={88}
              h={76}
            />
            <Text 
              color={'white'} 
              fontFamily={'gothic'}
              fontSize={24}
            >
              KIDSWEAR
            </Text>
            <Text 
              color={'white'} 
              fontFamily={'gothic'}
              fontSize={24}
            >
              COLLECTIVE
            </Text>

            <Text 
              color={'white'}
              marginBlock={8}
              fontSize={24}
              fontFamily={'gothicBold'}
            >
              REGISTER SELLER PLATFORM
            </Text>

            <Flex 
              w={'100%'}
              gap={4}
            >
              <CustomInput 
                label='First Name'
                onChange={setFirstName}
                placeholder='Enter your first name'
              />

              <CustomInput 
                label='Last Name'
                onChange={setLastName}
                placeholder='Enter your last name'
              />
            </Flex>
            
            <Flex 
              w={'100%'}
              gap={4}
            >
              <CustomInput 
                label='Email Address'
                onChange={setEmail}
                placeholder='Enter your email address'
              />

              <CustomInput 
                label='Post Code'
                onChange={setPostCode}
                placeholder='Enter your post code'
              />
            </Flex>

            <TextArea 
              label={'Address'}
              placeholder={'Enter your address here'}
              onChange={setAddress}
            />

            <Flex
              w={'100%'}
              gap={4}
            >
              <CustomInput 
                label="Password"
                placeholder='Enter your password here'
                onChange={setPassword}
                isPassword={true}
              />

              <CustomInput 
                label="Confirm Password"
                placeholder='Enter your password again'
                onChange={setCnfmPassword}
                isPassword={true}
              />
            </Flex>

            <FormControl 
              display='flex' 
              alignItems='center' 
              justifyContent='space-between'
              paddingBottom={4}
              mb={4}
            >
              <FormLabel 
                htmlFor='remember-me'
                color={'white'}
                mb='0'
                fontFamily={'gothic'}
                fontSize={12}
              >
                Remember Me
              </FormLabel>
              <Switch id='remember-me' colorScheme={'success'}/>
            </FormControl>

            <Button
              onClick={handleRegister}
              isDisabled={isRegisterDisabled}
              w={'100%'}
              borderRadius={0}
              bg={'primary.500'}
              color={'white'}
              fontSize={14}
              fontFamily={'gothic'}
              _hover={{
                bg:'primary.500',
                color: 'white'
              }}
              _disabled={{
                bg: 'transparent',
                border: '1px solid white'
              }}
            >
              REGISTER
            </Button>
          </Flex>
        </Center>
      </Box>
    </Flex>
  )
}

export default RegisterPage;