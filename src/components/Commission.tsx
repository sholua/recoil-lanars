import {
  Box,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Switch,
} from '@chakra-ui/react';
import { atom, useRecoilState } from 'recoil';

export const commissionEnabledAtom = atom({
  key: 'commissionEnabled',
  default: false,
});

export const commissionAtom = atom({
  key: 'commission',
  default: 5,
});

const Commission = () => {
  const [enabled, setEnabled] = useRecoilState(commissionEnabledAtom);
  const [commission, setCommission] = useRecoilState(commissionAtom);

  return (
    <Box width="300px">
      <FormControl display="flex" alignItems="center" mb={2}>
        <FormLabel htmlFor="includeCommission" mb="0">
          Include forex commission?
        </FormLabel>
        <Switch
          id="includeCommission"
          isChecked={enabled}
          onChange={(event) => setEnabled(event.currentTarget.checked)}
        />
      </FormControl>
      <NumberInput
        isDisabled={!enabled}
        value={commission}
        onChange={(value) => setCommission(parseFloat(value || '0'))}
      >
        <NumberInputField />
      </NumberInput>
    </Box>
  );
};

export default Commission;
