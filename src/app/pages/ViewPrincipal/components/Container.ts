import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  //height: 100vh;
  border: solid red 7px;
  //color: white;
  display: flex;
  flex-direction: column;
`;

export const ContainerApp = styled.div`
  width: 90%;
  height: 80vh;
  border: solid orange 7px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 5%;
  margin-right: 5%;
`;

export const ContainerAppTwo = styled.div`
  width: 90%;
  height: 70vh;
  border: solid grey 7px;
  display: flex;
  flex-direction: row;
  margin-left: 5%;
`;
