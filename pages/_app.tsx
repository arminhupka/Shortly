import type { AppProps } from 'next/app'
import Head from 'next/head'
import {ThemeProvider} from "styled-components";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <Head>
              <title>Shortly | URL Short APP</title>
          </Head>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
