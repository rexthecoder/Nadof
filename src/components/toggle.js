import { useContext } from 'react';

import {
  HiMoon,
  HiSun,
} from 'react-icons/hi';

import { ThemeContext } from '../services/themeContext';

const Toggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    return (
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (<HiSun onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="cursor-pointer text-gray-500 dark:text-gray-400 text-2xl"
            />) : (<HiMoon onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="cursor-pointer text-gray-500 dark:text-gray-400 text-2xl" />)
            }
        </div>
    )
}

export default Toggle
