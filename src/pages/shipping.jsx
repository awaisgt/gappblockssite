import {Header} from "@/components/Header"
import {Footer} from "@/components/Footer"
import PaymentHelp from "@/components/PaymentHelp"
import ShippingMainCard from "@/components/ShippingMainCard"
import Head from "next/head";
import {ChatBot} from "@/components/ChatBot";

export default function Payment() {

    return (
      <>
      <Head>
        <title>Shipping | GAPP Blocks</title>
        <meta
            name="description"
            content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
        />
      </Head>
      <Header/>
      <ShippingMainCard/>
      <PaymentHelp heading={"Trouble finding what you’re looking for?"}
                   content={"Make a request to a GAPP Consultant for specialized assistance with the unique integration of the Shipping Method of your choosing, and the consultant will get back to you as soon as possible."}
                   buttonText={"We’re here to help"} buttonLink={"/contact"}/>
      <ChatBot />
      <Footer/>
      </>
    )}