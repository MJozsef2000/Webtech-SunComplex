import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#03426b')};
  @media screen and (max-width: 768px) {
    padding: 100px 0;
    font-size: 1rem;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 550px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 768px){
    font-size: 1rem;
    height: 1050px;
  }
`;