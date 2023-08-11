import ButtonSyled from '../components/content/ButtonStyled';
import ContentStyled from '../components/content/ContentStyled';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import TittleStyled from '../components/shared/TittleStyled';
import Img from '/assets/home.svg';

function Planos() {
  return (
    <FlexContainerStyled modo="content">
      <ContentStyled>
        <img src={Img} alt="banner home" />
      </ContentStyled>
      <ContentStyled>
        <TittleStyled tamanho="lg" primary>
          Grow Travel
        </TittleStyled>
        <p>O melhor serviço para você!</p>
        <ButtonSyled>Saiba Mais</ButtonSyled>
      </ContentStyled>
    </FlexContainerStyled>
  );
}

export default Planos;
