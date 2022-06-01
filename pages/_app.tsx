import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/css/style.css'
import '../styles/css/skin-modes.css'
import '../styles/css/sidemenu.css'
import '../styles/css/color1.css'
import '../styles/css/icons.css'
import '../styles/css/main.css'
import '../styles/css/select2.min.css'
import '../styles/css/multiple-select.css'
import '../styles/css/jquery.timepicker.css'
import '../styles/css/spectrum.css'
import type { AppProps } from 'next/app'
import { useState } from 'react'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { persistor, store } from '../store/store'
import { CookiesProvider } from 'react-cookie'
import { PersistGate } from 'redux-persist/integration/react'
import { useRouter } from 'next/router'
import ProtectedRoutes from '../context/ProtectedRoutes'
import AppContext from '../context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [carsForRent, setCarsForRent] = useState([])
  const [cars, setCars] = useState([])
  const [availableCars, setAvailableCars] = useState([])
  const [adminPhone, setAdminPhone] = useState("")
  const requireNoAuth = ['/', '/login', '/signup', '/forgot-password', '/welcome']

  const contextProvider = {
    cars, setCars, availableCars, setAvailableCars, setCarsForRent, carsForRent, adminPhone, setAdminPhone
  }

  const router = useRouter()


  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>iTaxi</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon-32x32.png" />
        <link rel="shortcut icon" href="/favicon-16x16.png" />

      </Head>
      <CookiesProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <AppContext.Provider value={contextProvider} >
              {requireNoAuth.includes(router.pathname) ? (
                <Component {...pageProps} />
              ) : (
                <ProtectedRoutes>
                  <Component {...pageProps} />;
                </ProtectedRoutes>
              )}
            </AppContext.Provider>
          </PersistGate>
        </Provider>
      </CookiesProvider>
    </>

  )

}

export default MyApp
