import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/css/style.css'
import '../styles/css/skin-modes.css'
import '../styles/css/sidemenu.css'
import '../styles/css/color1.css'
import '../styles/css/icons.css'
import '../styles/css/main.css'
import '../styles/css/select2.min.css'

import type { AppProps } from 'next/app'
import AppContext from '../context/AppContext'
import { useState } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  const [toggle, setToggle] = useState(false)
  const [profileToggle, setProfileToggle] = useState(false)
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>iTaxi</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/hk-grotesk.min.css"
        />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <AppContext.Provider value={{ toggle, setToggle, profileToggle, setProfileToggle }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </>

  )

}

export default MyApp
