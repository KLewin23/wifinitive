import React from 'react';
import '@fontsource/montserrat';
import '@fontsource/montserrat/700.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />;
};

export default MyApp;
