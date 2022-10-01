import React from 'react'
import {
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle
} from '../InfoSection/InfoElements'
import { InfoWrapper, InfoContainer } from './RolunkPageElements'
import { ServicesCard, ServicesH2 } from '../Services/ServicesElements'

const RolunkPage = ({lightBg, id, imgStart, topLine, lightText, headLine, darkText, description}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
            </TextWrapper>
            </Column1>
            <Column2>
              <ServicesCard style={{ background: '#fbcb0f' }}>
                <ServicesH2 style={{ fontSize: '30px'}}> Több mint 500 lakossági napelemrendszer</ServicesH2>
              </ServicesCard>
              <div style={{ margin: '10px'}} />
              <ServicesCard style={{ background: '#fbcb0f' }}>
                <ServicesH2 style={{ fontSize: '40px'}}> 6 napelem park </ServicesH2>
              </ServicesCard>
            </Column2>
         </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default RolunkPage