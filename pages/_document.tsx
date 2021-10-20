import React from "react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta name="application-name" content="Cookban" />
          <meta name="theme-color" content="#005243" />
          <meta name="description" content="Cookban is menu app" />
          <link rel="icon" sizes="192x192" href="/icon-192x192.png" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
