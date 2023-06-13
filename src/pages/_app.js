import { AuthProvider } from '@/context/AuthContext'
import '@/styles/main.css'

export default function App({ Component, pageProps }) {
  return (
    <>
    <AuthProvider>
    <Component {...pageProps} />
    </AuthProvider>
    </>
  )
}
