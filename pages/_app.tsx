import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalRefs from '../context/GlobalRefs'
import ScrollContext from '../context/ScrollContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
  return <GlobalRefs>
    <ScrollContext>
      <Component {...pageProps} />
    </ScrollContext>
  </GlobalRefs> 

}

export default MyApp