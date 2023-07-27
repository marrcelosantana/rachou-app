import { useTheme } from "styled-components/native";

import {
  Input as NativeBaseInput,
  IInputProps,
  FormControl,
} from "native-base";

interface Props extends IInputProps {
  errorMessage?: string | null;
}

export function Input({ errorMessage = null, isInvalid, ...rest }: Props) {
  const theme = useTheme();
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid}>
      <NativeBaseInput
        bg="#dfdfdf"
        height="54px"
        borderRadius="5px"
        fontFamily={theme.FONT_FAMILY.REGULAR}
        fontSize={14}
        marginBottom="16px"
        _focus={{
          borderColor: theme.COLORS.BLUE,
          bgColor: "#dfdfdf",
        }}
        {...rest}
      />
      <FormControl.ErrorMessage _text={{ color: "red.500" }}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
}
