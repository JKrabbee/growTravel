import { styled } from 'styled-components';

const ContainerCardsList = styled.div`
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  align-items: end;
  justify-content: space-between;
  margin-top: 25px;

  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 20px;

    text-align: start;
  }
`;

export default ContainerCardsList;
