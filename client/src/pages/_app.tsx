import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { AnimatePresence } from "framer-motion";
import Layout from "layout";
import { createWrapper } from "next-redux-wrapper";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import globalReducer from "state";
import { api } from "state/api";
import { themeSettings } from "theme";
import "../styles/globals.css";

export interface RootState {
  global: {
    mode: string;
    userId: string;
  };
}

const store = configureStore({
  reducer: {
    global: globalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefault) => getDefault().concat(api.middleware),
});
const makeStore = () => store;

setupListeners(store.dispatch);

const wrapper = createWrapper(makeStore, { debug: true });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  const router = useRouter();
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <NextNProgress options={{ showSpinner: false }} color="#FFF6E0" />
      <Head>
        <title>Boardash</title>
      </Head>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.asPath} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
