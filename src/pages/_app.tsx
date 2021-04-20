import { useState } from 'react';
import "normalize.css";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "../styles/themeConfig" 
import { AppProps } from "next/app";
// NOTE: Do not move the styles dir to the src.
// They are used by the Netlify CMS preview feature.

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };
  
  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
