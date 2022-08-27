import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Head>
        <title>GAPP Blocks</title>
        <meta
          name="description"
          content="We have got all the tools to turn your e-commerce ideas into reality. GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <SecondaryFeatures />
        <Stats />
        <PrimaryFeatures />
      </main>
      <Footer />
    </>
  )
}
