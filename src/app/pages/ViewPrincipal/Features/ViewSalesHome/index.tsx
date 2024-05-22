import { Container } from './components/Container';
import BuzoInterfazEnginner from 'utils/Img/Products/BuzoInterfazEnginner.png';
export function ViewSalesHome() {
  return (
    <Container>
      <img
        style={{
          width: '100%',
          //height: '100%',
          border: 'dotted 5px red',
        }}
        src={BuzoInterfazEnginner}
        alt="muestrate"
      />
    </Container>
  );
}
