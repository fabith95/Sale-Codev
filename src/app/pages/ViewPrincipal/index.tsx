import { ViewInfoClothing } from './Features/ViewInfoClothing';
import { ViewProductRelated } from './Features/ViewProductsRelated';
import { ViewSalesHome } from './Features/ViewSalesHome';
import {
  Container,
  ContainerApp,
  ContainerAppTwo,
} from './components/Container';

export function ViewPrincipal() {
  return (
    <>
      <Container>
        <ContainerApp>
          <ViewSalesHome />
          <ViewInfoClothing />
        </ContainerApp>
        <ContainerAppTwo>
          <ViewProductRelated />
        </ContainerAppTwo>
      </Container>
    </>
  );
}
