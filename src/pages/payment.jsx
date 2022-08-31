import HeroSection from "@/components/HeroSection"
import {Header} from "@/components/Header"
import {Footer} from "@/components/Footer"
import {CustomerSupportPaymentPage} from "@/components/PaymentHelp"
import {
    AlternatingFeatureSection,
    LogoCloud1PaymentPage,
    LogoCloud2PaymentPage
} from "@/components/LogoCloudPaymentPage";

const HeroSectionHeadingContent = {
  Heading1: "Simple payment, anytime. Anywhere.",
}
const HeroSectionInnerContent = {
  pContent:"Connect your default payment and delivery methods, such as Stripe, PayPal, Square, and others, by making use of one of our many available blocks."
}


export default function Payment() {

    return (
      <>
      <Header/>
      <HeroSection secondaryHidden={true} headingContent={HeroSectionHeadingContent} innerContent={HeroSectionInnerContent}/>
      <LogoCloud1PaymentPage/>
      <AlternatingFeatureSection/>
      <LogoCloud2PaymentPage/>
      <CustomerSupportPaymentPage heading={"Trouble finding what you’re looking for?"}
                                  content={"Make a request to a GAPP Consultant for specialized assistance with the unique integration of the Shipping Method of your choosing, and the consultant will get back to you as soon as possible."}
                                  buttonText={"We’re here to help"} buttonLink={"/contact"}/>
     <Footer/>
      </>
    )}