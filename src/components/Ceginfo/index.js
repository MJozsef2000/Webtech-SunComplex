import React from 'react'
import { ServicesP, ServicesH1, ServicesH2, ServicesIcon} from '../Services/ServicesElements'
import { ServicesWrapper, ServicesContainer, ServicesCard } from "./CeginfoElements.js"
import { FaHardHat, FaUserTie, FaHome, FaAddressBook, FaMoneyBillWave } from 'react-icons/fa'
import { TbReceiptTax } from 'react-icons/tb'
import { MdSecurity } from 'react-icons/md'
import hungaryIcon from '../../images/hungary.png'

const Ceginfo = () => {
  return (
    <>
    <ServicesContainer id="info">
      <ServicesH1> Céginformáció </ServicesH1>
      <ServicesWrapper style={{ textAlign: "center" }}> 
        <ServicesCard>
          <FaHardHat size="10em" color="#fbcb0f"/>
          <ServicesH2> Építésvezető </ServicesH2>
          <ServicesP> Grebely Zoltán </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <FaUserTie size="9em" color="#03426b"/>
          <ServicesH2 style={{ marginTop:"1rem" }}> Tulajdonos </ServicesH2>
          <ServicesP> Grebelyné Homonnai Mónika </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <FaHome size="10em" color="#709e00"/>
          <ServicesH2> Székhely </ServicesH2>
          <ServicesP> 3763, Bódvaszilas, Bartók Béla út 5. </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <FaAddressBook size="9em" color="#000"/>
          <ServicesH2 style={{ marginTop:"1rem" }}> Cégjegyzékszám </ServicesH2>
          <ServicesP> 05-09-034285 </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <TbReceiptTax size="9em" color="#fbcb0f"/>
          <ServicesH2 style={{ marginTop:"1rem" }}> Adószám </ServicesH2>
          <ServicesP> 29272242-2-05 </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <FaMoneyBillWave size="9em" color="#03426b"/>
          <ServicesH2 style={{ marginTop:"1rem" }}> Bankszámlaszám </ServicesH2>
          <ServicesP> 11600006-00000000-95399995 </ServicesP>
        </ServicesCard>
        {/* <ServicesCard>
          <MdSecurity size="9em" color="#709e00"/>
          <ServicesH2 style={{ marginTop:"1rem" }}> Biztosítónk </ServicesH2>
          <ServicesP> - </ServicesP>
        </ServicesCard> */}
        <ServicesCard>
          <ServicesIcon src={hungaryIcon}/>
          <ServicesH2 style={{ marginTop:"1rem" }}> Szolgáltatási terület </ServicesH2>
          <ServicesP> <b> országos </b> </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  </>
  )
}

export default Ceginfo