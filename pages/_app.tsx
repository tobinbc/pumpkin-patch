import '../styles/globals.css'
import "../styles/embla.css";
// import "../styles/reset.css";

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
