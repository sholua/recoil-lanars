import { Heading } from '@chakra-ui/react';
import { atom, selector, useRecoilState } from 'recoil';
import InputStack from '../components/InputStack';
import { addCommission } from '../helpers/addCommission';
import { removeCommission } from '../helpers/removeCommission';
import Commission, {
  commissionAtom,
  commissionEnabledAtom,
} from '../components/Commission';
import CurrencyInput from '../components/CurrencyInput';

const exchangeRate = 0.83;

const usdAtom = atom({
  key: 'usd',
  default: 1,
});

const eurSelector = selector<number>({
  key: 'eur',
  get: ({ get }) => {
    let usd = get(usdAtom);

    const commissionEnabled = get(commissionEnabledAtom);
    if (commissionEnabled) {
      const commission = get(commissionAtom);
      usd = removeCommission(usd, commission);
    }

    return usd * exchangeRate;
  },
  set: ({ set, get }, newEurValue) => {
    // @ts-ignore
    let newUsdValue = newEurValue / exchangeRate;

    const commissionEnabled = get(commissionEnabledAtom);
    if (commissionEnabled) {
      const commission = get(commissionAtom);
      newUsdValue = addCommission(newUsdValue, commission);
    }

    set(usdAtom, newUsdValue);
  },
});

export const Selectors = () => {
  const [usd, setUSD] = useRecoilState(usdAtom);
  const [eur, setEUR] = useRecoilState(eurSelector);

  return (
    <div style={{ padding: 20 }}>
      <Heading size="lg" mb={2}>
        Currency converter
      </Heading>
      <InputStack>
        <CurrencyInput
          label="usd"
          amount={usd}
          onChange={(usd) => setUSD(usd)}
        />
        <CurrencyInput
          label="eur"
          amount={eur}
          onChange={(eur) => setEUR(eur)}
        />
      </InputStack>
      <Commission />
    </div>
  );
};
