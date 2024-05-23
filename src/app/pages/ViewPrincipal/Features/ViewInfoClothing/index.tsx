import { Container } from './components/Container';

export function ViewInfoClothing() {
  return (
    <Container>
      <div>
        <ul>
          <ol style={{ fontSize: 30, marginTop: 60 }}>
            <b>Buso SW-Enginner</b>
          </ol>
        </ul>
        <ul>
          <li style={{ fontSize: 20, marginTop: 60 }}>Clothing with Chompa</li>
        </ul>
        <ul>
          <li style={{ fontSize: 20 }}>$65.000</li>
        </ul>
        <ul>
          <li style={{ fontSize: 20 }}>Producto Colombiano</li>
        </ul>
        <ul>
          <li style={{ fontSize: 20 }}>100% Algodon</li>
        </ul>
      </div>
      <button
        style={{
          width: 450,
          height: 40,
          marginTop: 30,
          marginLeft: 20,
          borderRadius: 10,
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        Add to Cart
      </button>
    </Container>
  );
}
