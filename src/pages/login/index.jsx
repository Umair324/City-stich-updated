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
  Center
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Carousel from '../../components/carousel';
import CustomInput from '../../components/input';

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  useEffect(() => {
    if (!(email && password)) {
      setIsLoginDisabled(true)
      return;
    }
    setIsLoginDisabled(false);
  }, [email, password])

  const handleForgotPassword = () => {

  }

  const handleLogin = () => {
    navigate("/home")
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
              SELLER PLATFORM
            </Text>

            <Text 
              color={'white'}
              marginBottom={8}
              fontFamily={'gothic'}
              fontSize={24}
            >
              LOGIN
            </Text>

            <CustomInput 
              label='Email Address'
              onChange={setEmail}
              placeholder='Enter your email address'
            />

            <CustomInput 
              label='Password'
              onChange={setPassword}
              placeholder='Enter your password here'
              isPassword={true}
            />

            <FormControl 
              display='flex' 
              alignItems='center' 
              justifyContent='space-between'
              paddingBottom={4}
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
              alignSelf={'flex-start'}
              marginBottom={8}
              padding={0}
              onClick={handleForgotPassword}
              bg={'transparent'}
              fontSize={12}
              _hover={{
                bg: 'transparent',
              }}
            >
              <Text color={'white'} fontFamily={'gothic'}>
                Forgot Password
              </Text>
            </Button>

            <Button
              onClick={handleLogin}
              isDisabled={isLoginDisabled}
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
              LOGIN
            </Button>
          </Flex>
        </Center>
      </Box>
    </Flex>
  )
}

export default LoginPage;