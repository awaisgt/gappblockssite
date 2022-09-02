import { Container } from "@/components/Container";
import FAQAccordion from "@/components/FAQAccordion";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Head from "next/head"

export default function contact() {
    return (
        <>
        <Head>
          <title>Frequently Asked Questions | GAPP Blocks</title>
          <meta
              name="description"
              content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
          />
        </Head>
        <Header/>
        <FAQAccordion />
        <Footer/>
        </>
        )
}