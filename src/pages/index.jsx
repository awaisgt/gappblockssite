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
