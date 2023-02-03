import * as React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider } from "@emotion/react";
import theme from "../muiSrc/theme";
import createEmotionCache from "../muiSrc/createEmotionCache";
import Meta from "../core/Meta";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import UserReducer from "../Reducer/UserReducer";

const clientSideEmotionCache = createEmotionCache();

const store = configureStore({
  reducer: UserReducer,
});

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Meta />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
