import ButtonSyled from '../content/ButtonStyled';
import CardStyled from './CardStyled';

interface CardProps {
  img: string;
  imgAlt: string;
  text: string;
}

function Card(props: CardProps) {
  return (
    <CardStyled>
      <div>
        <img src={props.img} alt={props.imgAlt} />
        <h2>{props.text}</h2>
        <ButtonSyled primary>Saiba Mais</ButtonSyled>
      </div>
    </CardStyled>
  );
}

export default Card;
