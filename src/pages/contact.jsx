import { Contact } from "@/components/Contact";
import Head from 'next/head';
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import {ChatBot} from "@/components/ChatBot";

export default function contact() {

    return (
        <>
        <Head>
          <title>Contact Us | GAPP Blocks</title>
          <meta
              name="description"
              content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
          />
        </Head>
        <Header/>
        <main>
        <Contact />
        <ChatBot />
        </main>
        <Footer/>
        </>
        )

}