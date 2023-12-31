import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 100%;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  max-width: 1240px;
  padding-left: 2.4rem;
  padding-right: 2.4rem;
  margin: 0 auto;
`;

export { Container, InnerContainer };
