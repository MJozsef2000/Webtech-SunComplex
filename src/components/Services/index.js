import React from 'react'
import Icon1 from '../../images/phone.svg'
import Icon2 from '../../images/email.svg'
import Icon3 from '../../images/facebook.svg'
import {AiFillPhone, AiFillFacebook, AiTwotoneMail} from 'react-icons/ai'
import {
  ServicesContainer,
  ServicesH1,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  ServicesA
} from './ServicesElements'

const copyEmail = () => {
  navigator.clipboard.writeText("suncomplexkft@gmail.com");
  window.alert("E-mail kimásolva!")
}

const openFacebook = () => {
  window.open("https://www.facebook.com/napelemsc", "_blank")
}

const Services = () => {
  return (
    <>
      <ServicesContainer id="contact">
        <ServicesH1> Kapcsolat </ServicesH1>
        <ServicesWrapper> 
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2> Keressen telefonon! </ServicesH2>
            <ServicesP><AiFillPhone />&nbsp;+36707355134</ServicesP>
            <ServicesP> Grebely Zoltán építésvezető </ServicesP>
          </ServicesCard>
          <ServicesCard onClick={copyEmail}>
            <ServicesIcon src={Icon2}/>
            <ServicesH2> Írjon e-mailt! </ServicesH2>
            <ServicesP> <AiTwotoneMail />&nbsp;suncomplexkft@gmail.com </ServicesP>
          </ServicesCard>
          <ServicesCard onClick={openFacebook}>
            <ServicesIcon src={Icon3}/>
            <ServicesH2> A Facebook-on is megtalál! </ServicesH2>
            <ServicesP> <AiFillFacebook />&nbsp;<ServicesA href='https://www.facebook.com/napelemsc'> SunComplex Kft facebook oldala </ServicesA> </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services