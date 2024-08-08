import { useEffect, useState } from 'react';
import {
  Text,
  Flex,
  Box,
  Button,
  Divider,
} from '@chakra-ui/react';
// import Instruction from '../instruction';
import CustomInput from '../input/index';
// import TextArea from '../textarea';
// import CustomSelect from '../select';
import FormikInput from '../formpikinput';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import CustomCheckbox from '../checkbox';

const Measurements = () => {
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

  const formik = useFormik({
    initialValues: {
      date: "",
      dateReturn: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Collection name cannot be empty"),
      // description: Yup.string().required("Collection description cannot be empty"),
      // store: Yup.string().required("Store cannot be empty"),
    }),
  });


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
    )) {
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
        height={'auto'}
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
              <FormikInput
                formik={formik}
                name='retrunDate'
                type={'date'}
                label={'تاریخ واپسی'}
                labelColor={'black'}
                placeholder={'تاریخ واپسی'}
              />
              <FormikInput
                formik={formik}
                name='date'
                type={'date'}
                label={'تاریخ'}
                labelColor={'black'}
                placeholder={'تاریخ'}
              />
              <CustomInput
                label={'نام'}
                placeholder={'نام'}
                onChange={setFirstName}
                labelColor={'black'}
              />

              <CustomInput
                label={'نمبر'}
                placeholder={'نمبر'}
                onChange={setTitle}
                labelColor={'black'}
              />
            </Flex>
            <Text
              fontFamily={'gothicBold'}
              fontSize={'12px'}
              textTransform={'uppercase'}
            >
              Measurement Details
            </Text>

            <Divider
              marginBlock={2}
              bg={'black'}
              h={'1px'}
            />

            <Flex w={'100%'} gap={4} justifyContent={'flex-end'}>
              <Flex w={'18%'} marginTop={4} flexDir={'column'}>
              <Flex paddingBottom={'66px'} mt={'20px'} justifyContent={'center'} paddingRight={'10px'}>
              <Text fontSize={'16px'} fontWeight={'700'}>پجامہ</Text>
              </Flex>
                <CustomInput
                  label={'لمبائی'}
                  placeholder={'لمبائی'}
                  onChange={setBankName}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'چھانی'}
                  placeholder={'چھانی'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'ہاسن'}
                  placeholder={'ہاسن'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
              </Flex>
              <Flex w={'18%'} marginTop={4} flexDir={'column'}>
              <Flex paddingBottom={'66px'} mt={'20px'} justifyContent={'center'} paddingRight={'10px'}>
              <Text fontSize={'16px'} fontWeight={'700'}>شلوار</Text>
              </Flex>
                <CustomInput
                  label={'لمبائی'}
                  placeholder={'لمبائی'}
                  onChange={setBankName}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'ہازا'}
                  placeholder={'ہازا'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'گہیر'}
                  placeholder={'گہیر'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />

                <CustomInput
                  label={'ہاسن'}
                  placeholder={'ہاسن'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
              </Flex>
              <Flex w={'18%'} marginTop={4} flexDir={'column'}>
                <Box mt={'30px'}>
                  <CustomCheckbox label="آرمول " labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="موری" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'60px'}>
                  <CustomCheckbox label="آستین گول" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="ٹچ بٹن" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'60px'}>
                  <CustomCheckbox label="فینسی بٹن" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="کف چکور" labelColor="red" labelSize="16px" />
                </Box>
              </Flex>
              <Flex w={'18%'} marginTop={4} flexDir={'column'}>
                <Box mt={'30px'}>
                  <CustomCheckbox label="ڈبل سلائی" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="سنگل سلائی" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'60px'}>
                  <CustomCheckbox label="ڈبل پٹی" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="کفلنگ" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'60px'}>
                  <CustomCheckbox label="کف گول" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="کف چکور" labelColor="red" labelSize="16px" />
                </Box>
              </Flex>
              <Flex w={'18%'} marginTop={4} flexDir={'column'}>
                <CustomInput
                  label={'کالر'}
                  placeholder={'کالر'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'شیروانی'}
                  placeholder={'شیروانی'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
                <Box mt={'30px'}>
                  <CustomCheckbox label="داون گول" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="داون چکور" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'60px'}>
                  <CustomCheckbox label="فرنٹ جیب" labelColor="red" labelSize="16px" />
                </Box>
                <Box mt={'62px'}>
                  <CustomCheckbox label="سائیڈ پیکٹ" labelColor="red" labelSize="16px" />
                </Box>
              </Flex>
              <Flex w={'18%'} marginTop={4} flexDir={'column'}>
                <CustomInput
                  label={'لمبائی'}
                  placeholder={'لمبائی'}
                  onChange={setBankName}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'تیرا'}
                  placeholder={'تیرا'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'آستین'}
                  placeholder={'آستین'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />

                <CustomInput
                  label={'چیست'}
                  placeholder={'چیست'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />

                <CustomInput
                  label={'ویسٹ'}
                  placeholder={'ویسٹ'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />
                <CustomInput
                  label={'بامن'}
                  placeholder={'بامن'}
                  onChange={setAccountNumber}
                  labelColor={'black'}
                />

              </Flex>
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

export default Measurements;