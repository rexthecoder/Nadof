import {
  createContext,
  useEffect,
  useState,
} from 'react';

///[GetTheme] this is a function to get the current theme
const getTheme = () => {

    if (typeof window !== "undefined" && window.localStorage) {
        const storeTheme = window.localStorage.getItem("color-theme");

        if (typeof storeTheme === 'string') {
            return storeTheme;
        }

        const userMedia = window.matchMedia("(prefers-color-scheme: dark)");

        if (userMedia.matches) {
            return 'dark'
        }
    }
    return 'light'
}


export const ThemeContext = createContext();


export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = useState(getTheme());


    const rawSetTheme = (rawTheme) => {
        ///[Html Element Tree]
        const root = window.document.documentElement;

        ///[Check for the props]
        const isDark = rawTheme === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(rawTheme)

        localStorage.setItem('color-theme', rawTheme)
    }

    if (initialTheme) {
        rawSetTheme(initialTheme)
    }

    useEffect(() => {
        rawSetTheme(theme)
    }, [theme])


    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );



}