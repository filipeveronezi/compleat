import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '@/layout/Default'
import { useOverlay } from '@/store/useOverlay'

function MyApp({ Component, pageProps }: AppProps) {
  const { overlayState, setOverlayState } = useOverlay()

  return (
    <div className="w-full h-full relative">
      {overlayState && (
        <div className="fixed w-full h-full bg-black backdrop-filter backdrop-blur-sm bg-opacity-60 z-10" />
      )}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  )
}
export default MyApp
