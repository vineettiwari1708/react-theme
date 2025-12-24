import React, { createContext, useState, useContext } from 'react';
import themes from './themes.json'; // Import your themes

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, currentTheme: themes[theme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
