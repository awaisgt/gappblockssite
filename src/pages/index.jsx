
import {HeaderHome} from "@/components/HeaderHome"
import {LogosHome} from "@/components/LogosHome"
import { AboutHome } from '@/components/AboutHome'
import { AboutHome2 } from '@/components/AboutHome2'
import { TeamHome } from '@/components/TeamHome'
import { FooterHome } from '@/components/FooterHome'
import { Footer } from '@/components/Footer'
import { HeaderBlack } from '@/components/HeaderBlack'

export default function Home() {
  return (
    <>
  <HeaderBlack></HeaderBlack>
<HeaderHome></HeaderHome>
<LogosHome></LogosHome>
<AboutHome></AboutHome>
<AboutHome2></AboutHome2>
<TeamHome></TeamHome>
<FooterHome></FooterHome>
<Footer color='bg-gray-900'></Footer>
</>

  )
}
