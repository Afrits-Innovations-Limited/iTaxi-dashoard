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
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ProtectedRoutes from '../context/ProtectedRoutes'

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false)
  const [carsForRent, setCarsForRent] = useState([])
  const [profileToggle, setProfileToggle] = useState(false)
  const [pendingDrivers, setPendingDrivers] = useState([])
  const [pendingAdmins, setPendingAdmins] = useState([])
  const [auth, setAuth] = useState(false)
  const [admin, setAdmin] = useState({})
  const [cars, setCars] = useState([])
  const [availableCars, setAvailableCars] = useState([])
  const [revenue, setRevenue] = useState({})
  const [usersReport, setUsersReport] = useState({})
  const [token, setToken] = useState("")
  const [data, setData] = useState({})
  const [userPhone, setUserPhone] = useState("")


  const router = useRouter()
  const requireNoAuth = ['/', '/login', '/signup', '/forgot-password']

  const contextProvider = {
    userPhone,
    setUserPhone,
    data,
    setData,
    revenue,
    usersReport,
    setRevenue,
    setUsersReport,
    admin,
    setAdmin,
    toggle,
    setToggle,
    profileToggle,
    setProfileToggle,
    auth, setAuth, token, setToken, cars, setCars, availableCars, setAvailableCars, setCarsForRent, carsForRent,
    pendingDrivers,
    setPendingDrivers,
    pendingAdmins,
    setPendingAdmins
  }

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
      <AppContext.Provider value={contextProvider}>
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
