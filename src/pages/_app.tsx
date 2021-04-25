import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core'
import { theme } from '../styles/theme'
import Head from 'next/head'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Head>
          <title>Nova Jovens</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
