import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { AnimatePresence } from "framer-motion";
import Layout from "layout";
import { NextComponentType } from "next";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { themeSettings } from "theme";

/**
  This function consumes a component and wraps it under layout. 
  Goal is to have all the components wrapped with the Layout HOC and Theme Provider
 */

export interface RootState {
  global: {
    mode: string;
    userId: string;
  };
}

const Wrapper = (Component: NextComponentType) => {
  const HOCcheck = (props: any) => {
    const mode = useSelector((state: RootState) => state.global.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <Component {...props} />
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    );
  };
  return HOCcheck;
};

export default Wrapper;
