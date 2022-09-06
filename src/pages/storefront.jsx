import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StoreFrontHero } from "@/components/StoreFrontHero";
import { StoreFrontPrimaryFeatures } from "@/components/StoreFrontPrimaryFeatures";
import { StoreFrontSecondaryFeatures } from "@/components/StoreFrontSecondaryFeatures";
import Head from "next/head";
import {ChatBot} from "@/components/ChatBot";

const CallToActionContent = {
    Heading:"Build Apps In Minutes!",
    innerContent:"Make beautiful m-commerce apps in a flash for your customers without learning to code.",
    buttonText: "Get Started",
    buttonLink: "pricing",
}
export default function storefront() {

    return (
        <>
        <Head>
            <title>Storefront | GAPP Blocks</title>
            <meta
                name="description"
                content="We have got all the tools to turn your e-commerce ideas into reality.GAPP Blocks presents you with an easy no-code solution to kickstart your journey of success."
            />
        </Head>
        <Header/>
        <main>
        <StoreFrontHero/>
        <StoreFrontSecondaryFeatures/>
        <StoreFrontPrimaryFeatures/>
        <CallToAction content={CallToActionContent}/>
        <ChatBot />
        </main>
        <Footer/>
        </>
        )

}