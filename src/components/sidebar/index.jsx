import {
  Flex,
  Text,
  Image,
  Box
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import options from './options';
import { ReactComponent as Logo } from '../../assets/svgs/logo.svg'

const Sidebar = ({
  currentPage,
  setCurrentPage
}) => {
  const navigate = useNavigate()
  const username = 'placeholder name';
  const handleLogout = () => {
    navigate('/login');
  }

  return (
    <>
      <Flex
        direction='column'
        alignItems='center'
        paddingTop={12}
        paddingInline={4}
        height={'100%'}
      >
      <Flex justifyContent={'center'}>
        <Logo width={'90%'} height={'100%'} />
      </Flex>
        <Flex
          direction='column'
          width={'100%'}
          marginTop={8}
          flex={1}
        >
          {
            options.map(option => (
              <Flex
                key={option.id}
                onClick={() => setCurrentPage(option.id)}
                alignItems={'center'}
                padding={4}
                bg={option.id === currentPage ? 'black' : 'transparent'}
                _hover={{
                  cursor: 'pointer',
                  bg: option.id === currentPage ? 'black' : '#d5d5d5'
                }}
              >
                <Image
                  src={option.id == currentPage ? option.activeIcon : option.inactiveIcon}
                  width={18}
                  height={18}
                  marginRight={4}
                />
                <Text
                  fontFamily={'gothicBold'}
                  fontSize={16}
                  color={option.id === currentPage ? 'white' : 'black'}
                >
                  {option.label}
                </Text>
              </Flex>
            ))
          }
        </Flex>

        <Flex
          alignItems={'center'}
          justifyContent={'space-between'}
          padding={4}
          bg={'black'}
          width={'100%'}
          marginBottom={8}
        >
          <Image
            src={require('../../assets/svgs/profile-white.svg').default}
            width={'24px'}
            height={'24px'}
            marginRight={2}
          />
          <Text
            fontFamily={'gothic'}
            fontSize={12}
            color="white"
            flex={1}
          >
            {username}
          </Text>
          <Image
            src={require('../../assets/svgs/logout.svg').default}
            width={'24px'}
            height={'24px'}
            cursor={'pointer'}
            onClick={handleLogout}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Sidebar;