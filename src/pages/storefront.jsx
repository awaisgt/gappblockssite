import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { StoreFrontHero } from "@/components/StoreFrontHero";
import { StoreFrontPrimaryFeatures } from "@/components/StoreFrontPrimaryFeatures";
import { StoreFrontSecondaryFeatures } from "@/components/StoreFrontSecondaryFeatures";

export default function storefront() {

    return (
        <>
        <Header/>
        <main>
        <StoreFrontHero/>
        <StoreFrontSecondaryFeatures/>
        <StoreFrontPrimaryFeatures/>
        <CallToAction/>
        </main>
        <Footer/>
        </>
        )

}