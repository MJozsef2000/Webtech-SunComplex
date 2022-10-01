import styled from "styled-components";

export const GaleryContainer = styled.div`
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #709e00;

  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

export const GaleryH1 = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  color: #000;
  margin-bottom: 64px;
  
  @media screen and (max-width: 768px) {
    font-size: 3rem;
  }
`;

export const GaleryCard = styled.div`
  background: #fff;
  height: 700px;
  width: 900px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    height: 400px;
    width: 300px;
  }
`;