import React, { createContext, useState, useContext, useEffect } from 'react';
import themes from './themes.json';  // Import your theme data

// Create a context for theme management
const ThemeContext = createContext();

// Hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// ThemeProvider component to wrap the app and provide the theme context
export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  // Apply global styles (like body) when theme changes
  useEffect(() => {
    const themeStyles = themes[currentTheme];
    // Apply body styles
    document.body.style.height = themeStyles.body.height;
    document.body.style.backgroundColor = themeStyles.body.backgroundColor;
    document.body.style.color = themeStyles.body.color;

    // Cleanup function to reset body styles on theme change
    return () => {
      document.body.style.height = '';
      document.body.style.backgroundColor = '';
      document.body.style.color = '';
    };
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme, themeStyles: themes[currentTheme] }}>
      {children}
    </ThemeContext.Provider>
  );
};
