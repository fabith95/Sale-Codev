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
            }}
            src={caCodeHelloWorldCeNe}
            alt="muestrate"
          />
          <ContainerClothingDescribe />
        </ContainerClothingOne>
        <ContainerClothingTwo>
          <img
            style={{
              width: 230,
              marginLeft: 10,
              marginTop:38,
            }}
            src={buCodeIdCeNe}
            alt="muestrate"
          />
          <ContainerClothingDescribe />
        </ContainerClothingTwo>
        <ContainerClothingThree>
          <img
            style={{
              width: 240,
              marginLeft: 45,
            }}
            src={camisaCodeBinary}
            alt="muestrate"
          />
          <ContainerClothingDescribe />
        </ContainerClothingThree>
        <ContainerClothingFourt>
          <img
            style={{
              width: 230,
              marginLeft: 45,
            }}
            src={buPythonLoLaNe}
            alt="muestrate"
          />
          <ContainerClothingDescribe />
        </ContainerClothingFourt>
      </ContainerProductsRelated>
    </Container>
  );
}
