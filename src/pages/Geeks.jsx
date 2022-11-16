import {GeeksHeader} from '@/components/GeeksHeader'
import { GeeksCTA } from '@/components/GeeksCTA'
import { Footer } from '@/components/Footer'
import { HeaderWhite } from '@/components/HeadeWhite'
import { GeeksFooter } from '@/components/GeeksFooter'
export default function Geeks(){
    return (
        <>
        <HeaderWhite></HeaderWhite>
        <GeeksHeader>
        </GeeksHeader>
        <GeeksCTA></GeeksCTA>
        <GeeksFooter></GeeksFooter>
        <Footer></Footer>
        </>
    )
}