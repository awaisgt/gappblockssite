import {Header} from "@/components/Header"
import {Footer} from "@/components/Footer"
import PaymentHelp from "@/components/PaymentHelp"
import ShippingMainCard from "@/components/ShippingMainCard"

export default function Payment() {

    return (
      <>
      <Header/>
      <ShippingMainCard/>
      <PaymentHelp heading={"Trouble finding what you’re looking for?"}
                   content={"Make a request to a GAPP Consultant for specialized assistance with the unique integration of the Shipping Method of your choosing, and the consultant will get back to you as soon as possible."}
                   buttonText={"We’re here to help"} buttonLink={"/contact"}/>
     <Footer/>
      </>
    )}