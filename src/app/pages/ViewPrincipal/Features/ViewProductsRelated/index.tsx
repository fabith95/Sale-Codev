import {
  Container,
  ContainerClothingDescribe,
  ContainerClothingFourt,
  ContainerClothingOne,
  ContainerClothingThree,
  ContainerClothingTwo,
  ContainerProductsRelated,
  ContainerTittleRelated,
} from './components/Container';
import caCodeHelloWorldCeNe from 'utils/Img/Products/caCodeHelloWorldCeNe.png';
import buCodeIdCeNe from 'utils/Img/Products/buCodeIdCeNe.png';
import camisaCodeBinary from 'utils/Img/Products/camisaCodeBinary.png';
import buPythonLoLaNe from 'utils/Img/Products/buPythonLoLaNe.png';
import { Divider } from 'antd';

export function ViewProductRelated() {
  return (
    <Container>
      <ContainerTittleRelated>
        <h1>Related Products</h1>
      </ContainerTittleRelated>
      <ContainerProductsRelated>
        <ContainerClothingOne>
          <img
            style={{
              width: 330,
              marginLeft: -10,
              height: 295,
              paddingBottom: 40,
              paddingTop: 5,
            }}
            src={caCodeHelloWorldCeNe}
            alt="muestrate"
          />
          <Divider
            style={{ height: '1px', backgroundColor: '#ccc', margin: '1px 0' }}
          ></Divider>
          <ContainerClothingDescribe>
            <ul>
              <ol style={{ marginLeft: -40 }}>
                <b>Hello World</b>
              </ol>
              <li style={{ marginTop: 15 }}>Worlds for alls the developers</li>
              <li style={{ marginTop: 10 }}>$ 34.200</li>
            </ul>
          </ContainerClothingDescribe>
        </ContainerClothingOne>
        <ContainerClothingTwo>
          <img
            style={{
              width: 230,
              marginLeft: 10,
              height: 295,
              paddingBottom: 55,
              paddingTop: 20,
            }}
            src={buCodeIdCeNe}
            alt="muestrate"
          />
          <Divider
            style={{ height: '1px', backgroundColor: '#ccc', margin: '1px 0' }}
          ></Divider>
          <ContainerClothingDescribe>
            <ul>
              <ol style={{ marginLeft: -40 }}>
                <b>Buso IDentified</b>
              </ol>
              <li style={{ marginTop: 15 }}>Id for alls the developers</li>
              <li style={{ marginTop: 10 }}>$ 48.400</li>
            </ul>
          </ContainerClothingDescribe>
        </ContainerClothingTwo>
        <ContainerClothingThree>
          <img
            style={{
              width: 240,
              marginLeft: 10,
              marginTop: -35,
              paddingTop: 5,
              height: 330,
            }}
            src={camisaCodeBinary}
            alt="muestrate"
          />
          <Divider
            style={{ height: '1px', backgroundColor: '#ccc', margin: '1px 0' }}
          ></Divider>
          <ContainerClothingDescribe>
            <ul>
              <ol style={{ marginLeft: -40 }}>
                <b>Binary Machine</b>
              </ol>
              <li style={{ marginTop: 15 }}>Think for alls the developers</li>
              <li style={{ marginTop: 10 }}>$ 34.200</li>
            </ul>
          </ContainerClothingDescribe>
        </ContainerClothingThree>
        <ContainerClothingFourt>
          <img
            style={{
              width: 230,
              height: 295,
              marginLeft: 15,
              paddingBottom: 35,
            }}
            src={buPythonLoLaNe}
            alt="muestrate"
          />
          <Divider
            style={{
              height: '1px',
              backgroundColor: '#d9d9d9',
              margin: '1px 0',
            }}
          ></Divider>
          <ContainerClothingDescribe>
            <ul>
              <ol style={{ marginLeft: -40 }}>
                <b>Buso Phyton</b>
              </ol>
              <li style={{ marginTop: 15 }}>Phytons for alls the developers</li>
              <li style={{ marginTop: 10 }}>$ 48.400</li>
            </ul>
          </ContainerClothingDescribe>
        </ContainerClothingFourt>
      </ContainerProductsRelated>
    </Container>
  );
}
