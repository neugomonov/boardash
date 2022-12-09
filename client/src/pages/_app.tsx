import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import globalReducer from "state";
import "../styles/globals.css";

const makeStore = () =>
  configureStore({
    reducer: {
      global: globalReducer,
    },
  });

const wrapper = createWrapper(makeStore, { debug: true });

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
