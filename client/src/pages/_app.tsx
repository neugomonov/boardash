import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import globalReducer from "state";
import "../styles/globals.css";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "state/api";

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
  return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
