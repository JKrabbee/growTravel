import FlexContainerStyled from '../shared/FlexContainerStyled';
import LinkStyled from '../shared/LinkStyled';
import TittleStyled from '../shared/TittleStyled';
import HeaderStyled from './HeaderStyled';
import NavBar from './NavBar';

function Header() {
  return (
    <HeaderStyled>
      <FlexContainerStyled modo="header">
        <TittleStyled tamanho="md">
          <LinkStyled to={'/'}>GrowTravel</LinkStyled>
        </TittleStyled>
        <NavBar />
      </FlexContainerStyled>
    </HeaderStyled>
  );
}

export default Header;
