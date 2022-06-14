import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app'
import { Footer } from '../components/Footer/Rodapé';
import { Header } from '../components/Header/Cabeçalho';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp
