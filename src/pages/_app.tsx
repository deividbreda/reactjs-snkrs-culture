import { AppProps } from 'next/app'
import { Footer } from '../components/Footer/Rodapé';
import { Header } from '../components/Header/Cabeçalho';
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
