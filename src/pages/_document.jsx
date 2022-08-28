import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className="h-full bg-gray-50 antialiased" lang="en">
      <Head>
          <title>GAPP Blocks</title>
          <link rel="icon" href="/icons/favicon.ico" />
          <meta
              name="description"
              content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
          />
      </Head>
      <body className="flex h-full flex-col">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
