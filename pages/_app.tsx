import React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import "assets/styles.scss"

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
