import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Stats } from "@/components/Stats";
import { Newsletter } from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Head>
        <title>GAPP Blocks</title>
        <meta
          name="description"
          content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Stats />
        <PrimaryFeatures />
        <Newsletter />
      </main>
      <Footer />
    </>
  )
}
