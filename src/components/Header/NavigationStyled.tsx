import { styled } from "styled-components";

const NavigationStyled = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;

    width: 100%;
    max-width: 350px;

    ul {
        list-style: none;
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5rem;

        li > a {
            color: #cccc;
            font-weight: normal;
            transition: 0.2s;
            text-decoration: none;
        }

        li > a:hover {
            font-weight: 700;
            color: #fff;
        }
    }
`

export default NavigationStyled