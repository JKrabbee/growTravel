import styled, { css } from 'styled-components';

interface CardStyledProps {
  list?: boolean;
}

const CardStyled = styled.div<CardStyledProps>`
  width: 240px;
  height: 300px;

  padding: 24px;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    img {
      width: 100%;
    }

    h2 {
      color: #122a57;
      font-size: 1.8rem;
    }
  }
  ${(props) =>
    props.list &&
    css`
      border: 2px solid #122a57;
      border-radius: 15px;

      padding: 20px;

      h1 {
        border-bottom: 2px solid #122a57;
      }
      ul {
        padding: 20px 0;

        li {
          font-size: 1.5rem;
          color: #cccccc;
          list-style-position: inside;
        }
      }
      height: auto;
    `}
`;
export default CardStyled;
