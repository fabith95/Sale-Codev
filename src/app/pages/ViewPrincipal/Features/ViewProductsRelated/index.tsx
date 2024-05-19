import {
  Container,
  ContainerProductsRelated,
  ContainerTittleRelated,
} from './components/Container';

export function ViewProductRelated() {
  return (
    <Container>
      <ContainerTittleRelated />
      <ContainerProductsRelated />
    </Container>
  );
}
