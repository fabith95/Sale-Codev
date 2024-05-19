import {
  ContainerDescribeOptions,
  ContainerFooter,
  ContainerLogo,
} from './Components/Container';

export function Footer() {
  return (
    <ContainerFooter>
      <ContainerLogo />
      <ContainerDescribeOptions />
    </ContainerFooter>
  );
}
