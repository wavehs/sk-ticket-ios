import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const storedTheme = localStorage.getItem('app_theme');
        if (storedTheme === 'light') {
            setTheme('light');
            document.body.classList.add('light-theme');
        } else {
            setTheme('dark');
            document.body.classList.remove('light-theme');
        }
    }, []);

    const toggleTheme = () => {
        if (theme === 'dark') {
            setTheme('light');
            localStorage.setItem('app_theme', 'light');
            document.body.classList.add('light-theme');
        } else {
            setTheme('dark');
            localStorage.setItem('app_theme', 'dark');
            document.body.classList.remove('light-theme');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
