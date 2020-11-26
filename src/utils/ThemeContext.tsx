import * as React from "react";
import styled, { ThemeProvider } from 'styled-components';
import { backgroundColor, textColor } from './theme';

const defaultTheme = "light";
type ThemeContextType = {
  toggle: ()=>void;
};
const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export const useTheme = () => React.useContext(ThemeContext);

type Props = {
  children: React.ReactNode;
};

export const MyThemeProvider = ({ children }:Props) => {

  const currentTheme = localStorage.getItem('@THEME');

  const [themeState, setThemeState] = React.useState({
    mode: currentTheme || 'light'
  });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor};
  `;

  const toggle = () => {
    const mode = (themeState.mode === 'light' ? `dark` : `light`);
    setThemeState({ mode: mode });
    localStorage.setItem('@THEME', mode);
  };

  return (
    <ThemeContext.Provider value={{ toggle: toggle }}>
      <ThemeProvider
        theme={{
          mode: themeState.mode
        }}
      >
        <Wrapper>
          {children}
        </Wrapper>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};