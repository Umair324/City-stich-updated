import { useState } from 'react';
import {
  Input,
  FormLabel,
  FormControl,
  InputRightElement,
  InputGroup,
  Image
} from '@chakra-ui/react';

const CustomInput = ({
  label,
  onChange,
  placeholder,
  isPassword,
  labelColor,
  labelSize
}) => {
  const [value, setValue] = useState('');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <FormControl marginBottom={8}>
      <FormLabel 
        color={labelColor ? labelColor : 'white'}
        marginBottom={2}
        fontFamily={'gothic'}
        fontSize={labelSize ? labelSize : '8px'}
        letterSpacing={'2px'}
        textTransform={'uppercase'}
      >
        {label}
      </FormLabel>
      <InputGroup>
        <Input 
          value={value}
          onChange={e => handleChange(e)}
          type={ !isPassword ? 'text' : isPasswordShown ? 'text' : 'password'}
          placeholder={placeholder}
          bg={'white'}
          fontFamily={'gothic'}
          borderRadius={0}
          fontSize={12}
        />
        {
          isPassword && (
            <InputRightElement onClick={() => setIsPasswordShown(p => !p)}>
              <Image src={require('../../assets/eye.svg').default}/>
            </InputRightElement>
          )
        }
      </InputGroup>
    </FormControl>
  )
}

export default CustomInput