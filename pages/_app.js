import Layaout from '@/components/Layaout'
import '@/styles/globals.css'

export default function App ({ Component, pageProps }) {
  return (
    <Layaout>
      <Component {...pageProps} />
    </Layaout>
  )
}
