import { head } from 'shelljs';
import {
  ContainerDescribeOptions,
  ContainerFooter,
  ContainerFooterThree,
  ContainerFooterTwo,
  ContainerLinkSocial,
  ContainerLogo,
} from './Components/Container';
import LogoFooter from 'utils/Img/LogoFooter.png';
import iconFace from 'utils/Img/iconFace.png';
import iconInstagram from 'utils/Img/iconInstagram.png';
import { left } from 'inquirer/lib/utils/readline';

export function Footer() {
  return (
    <ContainerFooter>
      <ContainerFooterTwo>
        <ContainerLogo>
          <img
            style={{
              width: '100%',
              height: '16vh',
              border: 'dotted 5px red',
            }}
            src={LogoFooter}
            alt="muestrate"
          />
        </ContainerLogo>
        <ContainerDescribeOptions>
          <ul>
            <li>Office Local Colombia</li>
            <br></br>
            <li>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noreferrer"
              >
                Address: Medellin / Antioquia
              </a>
            </li>
            <br></br>
            <li>
              <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
                Email: SalesCoDev@gmail.com
              </a>
            </li>
          </ul>
          <ContainerLinkSocial>
            <img
              style={{ width: '35px', height: '4vh', border: 'dotted 5px red' }}
              src={iconFace}
              alt="muestrate"
            />
            <img
              style={{ width: '35px', height: '4vh', border: 'dotted 5px red' }}
              src={iconInstagram}
              alt="muestrate"
            />
          </ContainerLinkSocial>
        </ContainerDescribeOptions>
      </ContainerFooterTwo>
      <ContainerFooterThree>
        <p>
          Copyright Sales CoDev All Rights Reserved Privatcy Policy - Cookie
          Policy - Website Term of Use - General Security Policy
        </p>
      </ContainerFooterThree>
    </ContainerFooter>
  );
}
