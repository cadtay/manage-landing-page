import '../styles/styles.css'
import React from 'react'
import Head from "next/head"
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Script id="slider"type='text/javascript' src="https://unpkg.com/a11y-slider@0.4.15/dist/a11y-slider.js" defer></Script>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
