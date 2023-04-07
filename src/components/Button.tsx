import { useRecoilValue } from 'recoil';
import { darkModeAtom } from '../examples/Atoms';

export const Button = () => {
  const darkMode = useRecoilValue(darkModeAtom);

  return (
    <button
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
      }}
    >
      My UI Button
    </button>
  );
};

export default Button;
