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
import "react-datetime/css/react-datetime.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import type { AppProps } from 'next/app'
import AppContext from '../context/AppContext'
import { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ProtectedRoutes from '../context/ProtectedRoutes'

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false)
  const [profileToggle, setProfileToggle] = useState(false)
  const [auth, setAuth] = useState(false)
  const [admin, setAdmin] = useState({})
  const [cars, setCars] = useState({})
  const [availableCars, setAvailableCars] = useState({})
  const [token, setToken] = useState("")


  const router = useRouter()
  const requireNoAuth = ['/', '/login', '/signup', '/forgot-password']

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>iTaxi</title>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <AppContext.Provider value={{ toggle, setToggle, profileToggle, setProfileToggle, auth, setAuth, admin, setAdmin, token, setToken, cars, setCars, availableCars, setAvailableCars }}>
        {requireNoAuth.includes(router.pathname) ? (
          <Component {...pageProps} />
        ) : (
          <ProtectedRoutes>
            <Component {...pageProps} />;
          </ProtectedRoutes>
        )}
      </AppContext.Provider>
    </>

  )

}

export default MyApp
