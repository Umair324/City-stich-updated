import { useState } from 'react';
import {
  FormLabel,
  FormControl,
  Textarea,
  Text
} from '@chakra-ui/react';

const TextArea = ({
  label,
  onChange,
  placeholder,
  labelColor
}) => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (e.target.value.length > 300)
      e.target.value = e.target.value.substring(0, 300)
    setValue(e.target.value);
    onChange(e.target.value);
  }

  return (
    <FormControl marginBottom={8} position={'relative'}>
      <FormLabel 
        color={labelColor ? labelColor : 'white'}
        marginBottom={2}
        fontFamily={'gothic'}
        fontSize={8}
        letterSpacing={'2px'}
        textTransform={'uppercase'}
      >
        {label}
      </FormLabel>
      <Textarea 
        value={value}
        onChange={e => handleChange(e)}
        placeholder={placeholder}
        bg={'white'}
        fontFamily={'gothic'}
        borderRadius={0}
        fontSize={12}
        size='sm'
        resize={'none'}
      />
      <Text
        pos={'absolute'}
        bottom={2}
        right={2}
        color={'grey.300'}
        zIndex={2}
        fontFamily={'gothic'}
        fontSize={8}
        letterSpacing={2}
      >
        {value.length}/300
      </Text>
    </FormControl>
  )
}

export default TextArea