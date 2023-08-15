import CardStyled from '../shared/CardStyled';
import TittleStyled from '../shared/TittleStyled';
import ButtonSyled from './ButtonStyled';

interface ListProps {
  nomePlano: string;
  servicosPrestados: string[];
}

function CardList(props: ListProps) {
  return (
    <CardStyled list>
      <TittleStyled tamanho="md" primary>
        {props.nomePlano}
      </TittleStyled>
      <ul>
        {props.servicosPrestados.map((servico) => (
          <li>{servico}</li>
        ))}
      </ul>
      <ButtonSyled>Saiba Mais</ButtonSyled>
    </CardStyled>
  );
}

export default CardList;
