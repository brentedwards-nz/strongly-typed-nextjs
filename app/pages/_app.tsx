import React, {useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core";

import { themeDark, themeLight } from "lib/theme";

export default function MyApp({Component, pageProps}) {
  useEffect(() => {
    console.log("*** useEffect...")
    const jssStyles = document.querySelector('#jss-server-side');
    if(jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);
  
  return (
    <ThemeProvider theme={false? themeDark: themeLight}>
      <CssBaseline />
        <Component {...pageProps} />
    </ThemeProvider>
  );
};
