import styled from 'styled-components';

export const ContainerNavBar = styled.div`
  width: 100%;
  //height: 20vh;
  border: solid green 7px;
  color: white;
  display: flex;
  flex-direction: row;
  background-color: rgb(21, 30, 45);
`;

export const ContainerLogo = styled.div`
  width: 30%;
  //height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid blue 7px;
  color: white;
  margin-left: 5%;
`;

export const ContainerPageOptions = styled.div`
  width: 30%;
  //height: 15vh;
  display: flex;
  flex-direction: column;
  border: solid brown 7px;
  justify-content: flex-end;
  align-items: flex-end;
  margin-left: 30%;
`;

export const ContainerPageOptionsImg = styled.div`
  width: 30%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  border: solid black 7px;
  margin-right: 5%;
`;

export const ContainerPageOptionsButtom = styled.div`
  width: 75%;
  height: 6vh;
  display: flex;
  flex-direction: row;
  border: solid black 7px;
`;
