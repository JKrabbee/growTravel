import ButtonSyled from "../components/content/ButtonStyled"
import ContentStyled from "../components/content/ContentStyled"
import FlexContainerStyled from "../components/shared/FlexContainerStyled"
import TittleStyled from "../components/shared/TittleStyled"
import HomeImg from "/assets/home.svg"

function Home() {
    return (
        <FlexContainerStyled modo="content">
            <ContentStyled>
                <TittleStyled tamanho="lg" primary>Grow Travel</TittleStyled>
                <p>O melhor serviço para você!</p>
                <ButtonSyled>Saiba Mais</ButtonSyled>
            </ContentStyled>
            <ContentStyled>
                <img src={HomeImg} alt="banner home"/>
            </ContentStyled>
        </FlexContainerStyled>
    )
}

export default Home