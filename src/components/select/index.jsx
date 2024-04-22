import { useState } from 'react';
import {
  Select,
  FormLabel,
  FormControl,
  InputGroup,
} from '@chakra-ui/react';

const CustomSelect = ({
  label,
  onChange,
  placeholder,
  labelColor,
  labelSize,
  children
}) => {
  const [value, setValue] = useState('');

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
        <Select
          value={value}
          onChange={e => handleChange(e)}
          placeholder={placeholder}
          bg={'white'}
          fontFamily={'gothic'}
          borderRadius={0}
          fontSize={12}
        >
          {children}
        </Select>
      </InputGroup>
    </FormControl>
  )
}

export default CustomSelect