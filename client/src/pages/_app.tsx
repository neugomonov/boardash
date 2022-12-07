import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { configureStore } from "@reduxjs/toolkit";
import type { AppProps } from "next/app";
import { useMemo } from "react";
import { Provider, useSelector } from "react-redux";
import globalReducer from "state";
import { themeSettings } from "theme";
import "../styles/globals.css";

const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});

interface RootState {
  global: {
    mode: string;
  };
}

export default function MyApp({ Component, pageProps }: AppProps) {
  const mode = useSelector((state: RootState) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
