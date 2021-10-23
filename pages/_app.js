import Head from 'next/head'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';

import createCache from '@emotion/cache';
const createEmotionCache = () => createCache({ key: 'css' })
const clientSideEmotionCache = createEmotionCache()
export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        font-family: 'Open Sans', sans-serif;
      `,
    },
  },
});

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)
  const { emotionCache = clientSideEmotionCache } = pageProps
  return getLayout(
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}
