import { ViewSalesHome } from './Features/ViewSalesHome';
import { Container, ContainerApp, ContainerNav } from './components/Container';

export function ViewPrincipal() {
  return (
    <>
      <Container>
        <ContainerNav />
        <ContainerApp>
          <ViewSalesHome />
        </ContainerApp>
      </Container>
    </>
  );
}
