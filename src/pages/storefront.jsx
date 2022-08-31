import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StoreFrontHero } from "@/components/StoreFrontHero";
import { StoreFrontPrimaryFeatures } from "@/components/StoreFrontPrimaryFeatures";
import { StoreFrontSecondaryFeatures } from "@/components/StoreFrontSecondaryFeatures";

const CallToActionContent = {
    Heading:"Build Apps In Minutes!",
    innerContent:"Make beautiful m-commerce apps in a flash for your customers without learning to code.",
    buttonText: "Get Started",
    buttonLink: "pricing",
}
export default function storefront() {

    return (
        <>
        <Header/>
        <main>
        <StoreFrontHero/>
        <StoreFrontSecondaryFeatures/>
        <StoreFrontPrimaryFeatures/>
        <CallToAction content={CallToActionContent}/>
        </main>
        <Footer/>
        </>
        )

}