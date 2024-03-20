import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { darkTheme, lightTheme } from "./Components/Themes";
import AppLayout from "./Layout/AppLayout";
function App() {
  const [theme, setTheme] = useState("light");
  let themeMode = theme === "light" ? lightTheme : darkTheme;
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };
  const themeToggler = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  };
  useEffect(() => {
    let localTheme = window.localStorage.getItem("theme");
    localTheme ? setTheme(localTheme) : setMode("light");
    themeMode = localTheme === "light" ? lightTheme : darkTheme;
  }, [theme]);
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <AppLayout themeToggler={themeToggler} theme={theme} />
    </ThemeProvider>
  );
}

export default App;
