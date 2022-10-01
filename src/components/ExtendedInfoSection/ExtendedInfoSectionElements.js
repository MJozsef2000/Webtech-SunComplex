import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 1000px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px){
    font-size: 1rem;
    height: 1700px;
  }
  `;

export const ImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;

export const Img = styled.img`
  width: 30%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
  }
`;

export const InfoH1 = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  color: #fff;
  margin-bottom: 32px;
  
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#03426b')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;