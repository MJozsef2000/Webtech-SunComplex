import styled from "styled-components";

export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 950px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Bg = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
`

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HeroH1 = styled.h1`
  color: #fff;
  font-size: 60px;
  text-align: center;

  @media screen and (max-width:768px) {
    font-size: 40px;
  }
`

export const HeroP = styled.p`
  margin-top: 24px;
  color: #fff;
  font-size: 40px;
  text-align: center;
  max-width: 900px;

  @media screen and (max-width:768px) {
    font-size: 24px;
  }
`