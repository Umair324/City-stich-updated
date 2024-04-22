import { useEffect, useState } from 'react';
import {
  Text,
  Flex,
  Box,
  Button,
  Divider,
} from '@chakra-ui/react';
import Instruction from '../instruction';
import CustomInput from '../input';
import TextArea from '../textarea';
import CustomSelect from '../select';

const Profile = () => {
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [sortCode, setSortCode] = useState("");
  const [rejectedOption, setRejectedOption] = useState("Donate to charity")


  useEffect(() => {
    if (!(
      title &&
      firstName &&
      surname &&
      address &&
      city &&
      postcode && 
      bankName &&
      accountNumber &&
      sortCode &&
      rejectedOption
    )){
      setIsSaveDisabled(true);
      return
    }

    setIsSaveDisabled(false)
  }, [
    title, 
    firstName,
    surname, 
    address, 
    city, 
    postcode, 
    bankName, 
    accountNumber,
    sortCode, 
    rejectedOption
  ]);

  const handleCancel = () => {
    
  }

  const handleSave = () => {
    
  }

  return (
    <Box h={'100vh'} paddingBottom={20}>
      <Box
        bg='white'
        padding={8}
      >
        <Text
          fontFamily={'gothicBold'}
          fontSize={16}
        >
          PROFILE
        </Text>
      </Box>

      <Flex 
        bg={'#e5e5e5'}
        padding={4}
        height={'100%'}
        gap={2}
      >
        <Flex
          flex={1}
          direction={'column'}
          justifyContent={'space-between'}
          bg={'white'}
          padding={4}
        >
          <Box>
            <Text
              fontFamily={'gothicBold'}
              fontSize={'12px'}
              textTransform={'uppercase'}
            >
              Personal Details
            </Text>

            <Divider 
              marginBlock={2}
              bg={'black'}
              h={'1px'}
            />

            <Flex gap={4} marginTop={4}>
              <CustomInput 
                label={'title'}
                placeholder={'Enter title here'}
                onChange={setTitle}
                labelColor={'black'}
                labelSize={'8px'}
              />

              <CustomInput 
                label={'first name'}
                placeholder={'Enter your first name here'}
                onChange={setFirstName}
                labelColor={'black'}
                labelSize={'8px'}
              />

              <CustomInput 
                label={'surname'}
                placeholder={'Enter your surname here'}
                onChange={setSurname}
                labelColor={'black'}
                labelSize={'8px'}
              />
            </Flex>

            <TextArea 
              label={'Address'}
              labelColor={'black'}
              placeholder={'Enter your address here'}
              onChange={setAddress}
            />

            <Flex gap={4} marginTop={4}>
              <CustomInput 
                label={'City'}
                placeholder={'Enter your city name here'}
                onChange={setCity}
                labelColor={'black'}
                labelSize={'8px'}
              />

              <CustomInput 
                label={'Post code'}
                placeholder={'Enter your post code here'}
                onChange={setPostcode}
                labelColor={'black'}
                labelSize={'8px'}
              />
            </Flex>

            <Text
              fontFamily={'gothicBold'}
              fontSize={'12px'}
              textTransform={'uppercase'}
            >
              Bank Details
            </Text>

            <Divider 
              marginBlock={2}
              bg={'black'}
              h={'1px'}
            />

            <Flex gap={4} marginTop={4}>
              <CustomInput 
                label={'Bank Name'}
                placeholder={'Enter your bank name here'}
                onChange={setBankName}
                labelColor={'black'}
                labelSize={'8px'}
              />

              <CustomInput 
                label={'Account Number'}
                placeholder={'Enter your account number here'}
                onChange={setAccountNumber}
                labelColor={'black'}
                labelSize={'8px'}
              />
            </Flex>

            <Flex gap={4} marginTop={4}>
              <CustomInput 
                label={'Sort code'}
                placeholder={'Enter your sort code here'}
                onChange={setSortCode}
                labelColor={'black'}
                labelSize={'8px'}
              />

              <CustomSelect 
                label={"WHAT WOULD YOU LIKE DO WITH REJECTED ITEMS?"}
                placeholder={"Select an option"}
                onChange={setRejectedOption}
                labelColor={'black'}
                labelSize={'8px'}
              >
                <option value="Donate to charity">Donate to charity</option>
              </CustomSelect>
            </Flex>
          </Box>

          <Flex 
            alignSelf={'flex-end'}
            justifyContent={'flex-end'}
            w={'100%'}
            gap={2}
          >
            <Button
              onClick={handleCancel}
              flex={1}
              maxW={'138px'}
              background={'white'}
              color={'black'}
              border={'1px solid black'}
              borderRadius={0}
            >
              Cancel
            </Button>

            <Button
              onClick={handleSave}
              flex={1}
              maxW={'138px'}
              background={'black'}
              color={'white'}
              borderRadius={0}
              isDisabled={isSaveDisabled}
              _disabled={{
                bg: 'grey.100',
                cursor: 'default',
                _hover: {
                  bg: 'grey.100',
                  cursor: 'default',
                }
              }}
            >
              Save
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  )
}

export default Profile;