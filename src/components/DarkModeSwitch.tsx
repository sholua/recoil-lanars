import { useRecoilState } from 'recoil';
import { darkModeAtom } from '../examples/Atoms';

const DarkModeSwitch = () => {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom);

  return (
    <input
      type="checkbox"
      checked={darkMode}
      onChange={(event) => {
        setDarkMode(event.currentTarget.checked);
      }}
    />
  );
};

export default DarkModeSwitch;
