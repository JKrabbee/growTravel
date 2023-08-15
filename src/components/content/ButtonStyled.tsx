import { css, styled } from 'styled-components';

interface ButtonSyledProps {
  primary?: boolean;
}

const ButtonSyled = styled.button<ButtonSyledProps>`
  width: 200px;

  color: #fff;
  background-color: #122a57;

  padding: 15px;
  font-size: 2rem;

  border: none;
  border-radius: 40px;

  cursor: pointer;

  &:hover {
    font-weight: 700;
  }

  ${(props) =>
    props.primary &&
    css`
      background-color: transparent;
      color: #122a57;
      width: 100%;
      padding: 10px;

      border-radius: 20px;
      border: 2px solid #122a57;
      font-weight: 600;

      transition: 0.2s;

      &:hover {
        background-color: #4b5f87;
        color: #ffff;
        border: 2px solid #4b5f87;
      }
    `}
`;

export default ButtonSyled;
