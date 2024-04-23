import { useState } from 'react';
import {
    Input,
    FormLabel,
    FormControl,
    InputRightElement,
    InputGroup,
    Image,
    Text,
} from '@chakra-ui/react';

const FormikInput = ({
    formik,
    label,
    name = "",
    isArray = false,
    index = 0,
    field = "",
    placeholder,
    isPassword,
    type,
    labelColor,
    labelSize,
    icon,
    disabled = false,
    disabledStyle,
}) => {
    const [isPasswordShown, setIsPasswordShown] = useState(false);

    const inputType = type ? type : !isPassword ? 'text' : isPasswordShown ? 'text' : 'password';

    const handleChange = (e) => {
        const value = e.target.value;
        if (!isArray) {
            formik.setFieldValue(name, value);
            return;
        }

        formik.setFieldValue(`${name}.${index}.${field}`, value);
    }

    return (
        <FormControl>
            <FormLabel
                color={labelColor ? labelColor : 'white'}
                marginBottom={2}
                fontFamily={'gothicBold'}
                fontSize={labelSize ? labelSize : '14px'}
                textTransform={'uppercase'}
            >
                {label}
            </FormLabel>
            <InputGroup>
                <Input
                    name={name}
                    value={isArray ? formik.values[name][index][field] : formik.values[name]}
                    onChange={handleChange}
                    type={inputType}
                    placeholder={placeholder}
                    bg={'white'}
                    fontFamily={'gothic'}
                    borderRadius={0}
                    fontSize={'12px'}
                    height={'48px'}
                    isDisabled={disabled}
                    _disabled={disabledStyle}
                />
                {icon && (
                    <InputRightElement>
                        {icon}
                    </InputRightElement>
                )}
                {isPassword && (
                    <InputRightElement onClick={() => setIsPasswordShown((p) => !p)} height={'48px'}>
                        {isPasswordShown ? (
                            <Image src={require('../../assets/eye.svg').default} />
                        ) : (
                            <Image src={require('../../assets/eye.svg').default} />
                        )}
                    </InputRightElement>
                )}
            </InputGroup>
            {formik.touched[name] && formik.errors[name] ? (
                <Text color='#800' fontSize='10px'>{formik.errors[name]}</Text>
            ) : null}
        </FormControl>
    );
}

export default FormikInput;
