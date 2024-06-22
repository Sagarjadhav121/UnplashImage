import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const ContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const body = document.querySelector("body");
    if (isDarkTheme) {
      body.className = "dark-theme";
    } else {
      body.classList.remove("dark-theme");
    }
    console.log("1221");
  };
  return (
    <AppContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
      {children}
    </AppContext.Provider>
  );
};
export default ContextProvider;

export const gloabalContext = () => {
  return useContext(AppContext);
};
