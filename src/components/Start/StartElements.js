import styled from "styled-components";

export const StartContainer = styled.div`
  height: 1000px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    height: 900px;
  }
`;

export const StartWrapper = styled.div`
  width: 25%;
  display: block;
  margin: 60px;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0px;
    padding: 0px;
  }
`;

export const StartCardWrapper = styled.div`
  margin: 10%;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    align-itmes: center;
    grid-gap: 16px;
    padding-left: 100%;
  }
`

export const StartFooterWrapper = styled.div`
  margin-left: 800px;
  width: 150%;

  @media screen and (max-width: 768px) {
    width: 300%;
    margin-left: 40%;
  }
`

export const StartTitleWrapper = styled.div`
  margin: 40px 25% 0px;
  width: 50%;
  @media screen and (max-width: 768px) {
    margin: 10%
  }
`

export const StartCard = styled.div`
  background: #fbcb0f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 10px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);

  @media screen and (max-width: 768px) {
    width: 140%;
  }
`;

export const StartFooterCard = styled.div`
  background: #fbcb0f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  border-radius: 10px;
  max-height: 340px;
  padding: 10px;
  width: 100%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
`;


export const StartH2 = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 10px;
  text-align: left;
  color: black;
  @media screen and (max-width: 1000px) {
    font-size: 2rem;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
    text-align: center;
  }
`

export const StartP = styled.p`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  text-align: center;
  color: black;

  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
