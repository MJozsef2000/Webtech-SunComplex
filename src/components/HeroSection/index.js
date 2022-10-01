import React from 'react'
import BG from '../../background/background.png'
import { 
HeroContainer, 
HeroBg, 
Bg, 
HeroContent, 
HeroH1, 
HeroP} from './HeroElements'
const HeroSection = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <Bg src={BG} />
      </HeroBg>
      <HeroContent>
        <HeroH1> SunComplex Kft. </HeroH1>
        <HeroP>
          Teljes körű ügyintézés az elképzeléstől a használatba vételig, az ország egész területén!
        </HeroP>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection