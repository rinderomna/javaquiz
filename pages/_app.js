import {createGlobalStyle, ThemeProvider} from 'styled-components';
import React from 'react';

import Document, {Html, Main, Nextscript} from 'next/document';
import Head from 'next/head';
import db from '../db.json';

const GlobalStyle = createGlobalStyle `
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    /* New styles */
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    // Deixa branco no começo
    color: ${
    ({theme}) => theme.colors.contrastText
};
  }
  html, body {
    min-height: 100vh;
  }
  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

const {theme} = db;

export default function App({Component, pageProps}) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                    <link rel="manifest" href="/site.webmanifest"/>
                    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
                    <meta name="theme-color" content="#ffffff"/>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine"/>
                    <title>JavaQuiz - Imersão Alura Next.js</title>
                </Head>
                <GlobalStyle/>
                <Component {...pageProps}/>
            </ThemeProvider>
        </>
    );
}
