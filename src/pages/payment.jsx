import HeroSection from "@/components/HeroSection"
import {Header} from "@/components/Header"
import {Footer} from "@/components/Footer"
import PaymentHelp from "@/components/PaymentHelp"
import {
    AlternatingFeatureSection,
    LogoCloud1PaymentPage,
    LogoCloud2PaymentPage
} from "@/components/LogoCloudPaymentPage";

export default function Payment() {

    return (
      <>
      <Header/>
      <HeroSection/>
      <LogoCloud1PaymentPage/>
      <PaymentHelp/>
      <LogoCloud2PaymentPage/>
      <AlternatingFeatureSection/>
     <Footer/>
      </>
    )}