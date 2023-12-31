import { createGlobalStyle } from 'styled-components';

const GlobalStyled = createGlobalStyle`
    *, html, body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: 'Montserrat';
    }
    :root {
        font-size: 10px
    }
`;

export default GlobalStyled;
