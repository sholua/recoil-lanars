import { atom } from 'recoil';
import DarkModeSwitch from '../components/DarkModeSwitch';
import Button from '../components/Button';

export const darkModeAtom = atom({
  key: 'darkMode',
  default: false,
});

export const Atoms = () => {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
};
