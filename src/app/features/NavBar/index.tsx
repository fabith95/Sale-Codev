import {
  ContainerLogo,
  ContainerNavBar,
  ContainerPageOptions,
} from './Components/Container';

export function NavBar() {
  return (
    <ContainerNavBar>
      <ContainerLogo />
      <ContainerPageOptions />
    </ContainerNavBar>
  );
}
