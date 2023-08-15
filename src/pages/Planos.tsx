import CardList from '../components/content/CardList';
import ContainerCardsList from '../components/content/ContainerCardsList';
import PlanosStyled from '../components/content/PlanosStyled';
import FlexContainerStyled from '../components/shared/FlexContainerStyled';
import TittleStyled from '../components/shared/TittleStyled';

const planos = [
  {
    nomePlano: 'Plano 1',
    servicosPrestados: ['Suporte 24h', 'Seriços de quarto', 'Guia Básico']
  },
  {
    nomePlano: 'Plano 2',
    servicosPrestados: [
      'Suporte 24h',
      'Seriços de quarto',
      'Guia Básico',
      'Roteiro de trilhas',
      'Serviço personalizado'
    ]
  },
  {
    nomePlano: 'Plano 3',
    servicosPrestados: [
      'Suporte 24h',
      'Seriços de quarto',
      'Guia Básico',
      'Roteiro de trilhas',
      'Serviço personalizado',
      'Área VIP'
    ]
  }
];

function Planos() {
  return (
    <FlexContainerStyled modo="content">
      <PlanosStyled>
        <TittleStyled tamanho="lg" primary>
          | Planos
        </TittleStyled>
        <ContainerCardsList>
          {planos.map((card) => (
            <CardList nomePlano={card.nomePlano} servicosPrestados={card.servicosPrestados} />
          ))}
        </ContainerCardsList>
      </PlanosStyled>
    </FlexContainerStyled>
  );
}

export default Planos;
