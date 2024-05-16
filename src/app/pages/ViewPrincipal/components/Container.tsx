import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  border: solid red 7px;
  //color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ContainerNav = styled.div`
  width: 100%;
  height: 20vh;
  border: solid green 7px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ContainerApp = styled.div`
  width: 100%;
  height: 80vh;
  border: solid orange 7px;
  display: flex;
  justify-content: flex-end;
`;
