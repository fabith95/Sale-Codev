import styled from 'styled-components';

export const ContainerFooter = styled.div`
  width: 100%;
  //height: 20vh;
  border: solid 7px green;
  display: flex;
  flex-direction: column;
`;

export const ContainerFooterTwo = styled.div`
  width: 100%;
  //height: 20vh;
  border: solid 7px violet;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(21, 30, 45);
`;

export const ContainerFooterThree = styled.div`
  width: 100%;
  height: 3vh;
  border: solid 7px pink;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(21, 30, 45);
  color: white;
`;

export const ContainerLogo = styled.div`
  width: 10%;
  //height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  border: solid blue 7px;
  color: white;
  margin-left: 5%;
`;

export const ContainerDescribeOptions = styled.div`
  width: 35%;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border: solid brown 7px;
  color: white;
  margin-right: 5%;
`;

export const ContainerLinkSocial = styled.div`
  width: 15%;
  height: 5vh;
  display: flex;
  flex-direction: row;
  border: solid black 7px;
  justify-content: space-between;
  margin-left: 38%;
  margin-bottom: 12%;
`;
