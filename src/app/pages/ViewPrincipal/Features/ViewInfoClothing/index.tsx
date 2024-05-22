import { Container } from './components/Container';

export function ViewInfoClothing() {
  return (
    <Container>
      <div>
        <ul>
          <ol>Buso SW-Enginner</ol>
        </ul>
        <ul>
          <li>Chompa</li>
        </ul>
        <ul>
          <li>$65.000</li>
        </ul>
        <br></br>
        <ul>
          <li>Producto Colombiano</li>
        </ul>
        <ul>
          <li>100% Algodon</li>
        </ul>
      </div>
      <button
        style={{
          width: 250,
          height: 40,
          marginTop: 30,
          marginLeft: 120,
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        Add to Cart
      </button>
    </Container>
  );
}
