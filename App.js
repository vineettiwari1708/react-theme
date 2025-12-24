import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';

const Header = () => {
  const { currentTheme } = useTheme();

  return (
    <h1 style={currentTheme.header}>
      Welcome to My Themed App
    </h1>
  );
};

const Button = () => {
  const { currentTheme } = useTheme();

  return (
    <button style={currentTheme.button}>Click Me</button>
  );
};

const Layout = () => {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div style={currentTheme.background}>
      <Header />
      <Button />
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;
