import { StartContainer, StartWrapper, StartFooterCard, StartCard, StartH2, StartP, StartCardWrapper, StartTitleWrapper, StartFooterWrapper } from "./StartElements";
import background from "./teto16.jpg";
export const Start = () => {
  return (
    <StartContainer id="start" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
      <StartTitleWrapper>
        <StartCard>
          <StartH2> Komplett napelem rendszerek </StartH2>
        </StartCard>
      </StartTitleWrapper>
      <StartWrapper>
        <StartCardWrapper>
          <StartCard>
            <StartH2> 2.5 kW </StartH2>
            <StartP> bruttó 1.190.000.- Ft-tól </StartP>
          </StartCard>
        </StartCardWrapper> 
        <StartCardWrapper>
          <StartCard>
            <StartH2> 5 kW </StartH2>
            <StartP> bruttó 1.990.000.- Ft-tól </StartP>
          </StartCard>
        </StartCardWrapper>
        <StartCardWrapper>
          <StartCard>
            <StartH2> 10 kW </StartH2>
            <StartP> bruttó 3.590.000.- Ft-tól </StartP>
          </StartCard>
        </StartCardWrapper>
        <StartFooterWrapper>
        <StartFooterCard>
            <StartH2>Telefon: +36 70 735 5134</StartH2>
            <StartH2>E-mail: suncomplexkft@gmail.com </StartH2>
        </StartFooterCard>
      </StartFooterWrapper>
      </StartWrapper>
    </StartContainer>
  );
}