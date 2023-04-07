import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
} from '@chakra-ui/react';

const CurrencyInput = ({
  amount,
  onChange,
  label,
}: {
  label: string;
  amount: number;
  onChange?: (amount: number) => void;
}) => {
  let symbol = label === 'usd' ? '$' : '€';

  return (
    <FormControl id={label.toUpperCase()}>
      <FormLabel>{label.toUpperCase()}</FormLabel>
      <NumberInput
        value={`${symbol} ${amount}`}
        onChange={(value) => {
          const withoutSymbol = value.split(' ')[0];
          onChange?.(parseFloat(withoutSymbol || '0'));
        }}
      >
        <NumberInputField />
      </NumberInput>
    </FormControl>
  );
};

export default CurrencyInput;
