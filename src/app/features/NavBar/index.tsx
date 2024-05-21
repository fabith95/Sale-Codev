import { utils } from 'stylelint';
import LogoOne from 'utils/Img/LogoOne.png';
import LogoUsers from 'utils/Img/LogoUsers.png';
import CarShopping from 'utils/Img/CarShopping.png';

import {
  ContainerLogo,
  ContainerNavBar,
  ContainerPageOptions,
  ContainerPageOptionsButtom,
  ContainerPageOptionsImg,
} from './Components/Container';
import OptionsPage from './Features/OptionsPage';

export function NavBar() {
  return (
    <ContainerNavBar>
      <ContainerLogo>
        <img
          style={{
            width: '100%',
            height: '14vh',
            border: 'dotted 5px red',
          }}
          src={LogoOne}
          alt="muestrate"
        />
      </ContainerLogo>
      <ContainerPageOptions>
        <ContainerPageOptionsImg>
          <img
            style={{
              width: '50%',
              height: '7vh',
              border: '5px red',
              marginRight: 15
            }}
            src={CarShopping}
            alt="muestrate"
          />
          <img
            style={{
              width: '50%',
              height: '7vh',
              border: '5px red',
            }}
            src={LogoUsers}
            alt="muestrate"
          />
        </ContainerPageOptionsImg>
        <ContainerPageOptionsButtom>
          <OptionsPage />
        </ContainerPageOptionsButtom>
      </ContainerPageOptions>
    </ContainerNavBar>
  );
}
