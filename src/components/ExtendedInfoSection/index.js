import React from 'react'
import {
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
} from '../InfoSection/InfoElements'
import {InfoWrapper, ImgWrap, Img, InfoRow, InfoH1, InfoContainer} from './ExtendedInfoSectionElements'

const ExtendedInfoSection = ({
  lightBg, id, imgStart, topLine, lightText, 
  headLine1, description1, headLine2, description2, headLine3, description3, headLine4, description4,
  darkText, img1, img2, img3, img4}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoH1> Szolgáltatásaink </InfoH1>
        <InfoWrapper>
         <InfoRow imgStart={imgStart}>
            <Column1>
            <ImgWrap>
                <Img src={img1}/>
            </ImgWrap>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine1}</Heading>
              <Subtitle darkText={darkText}>{description1}</Subtitle>
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
                <Img src={img2}/>
            </ImgWrap>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine2}</Heading>
              <Subtitle darkText={darkText}>{description2}</Subtitle>
            </TextWrapper>
            </Column2>
         </InfoRow>
         <InfoRow imgStart={imgStart}>
            <Column1>
            <ImgWrap>
                <Img src={img3}/>
            </ImgWrap>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine3}</Heading>
              <Subtitle darkText={darkText}>{description3}</Subtitle>
            </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
                <Img src={img4}/>
            </ImgWrap>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headLine4}</Heading>
              <Subtitle darkText={darkText}>{description4}</Subtitle>
            </TextWrapper>
            </Column2>
         </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default ExtendedInfoSection