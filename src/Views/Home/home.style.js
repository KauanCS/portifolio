import styled from 'styled-components';

export const Background = styled.div`
  margin: 0;
  background: #212121;
  flex: 1;
`;

export const NavBar = styled.div`
  top: 0;
  display: flex;
  height: 100px;
  justify-content: flex-end;
  align-items: center;
  color: white;   
`;

export const ItemsMenu = styled.a`
  color: white;
  margin: 0 50px;
  cursor: pointer;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;

export const ContainerHome = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;

`;

export const ContainerWelcome = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerApresentation  = styled.div`
  display: flex;
`;

export const ContainerName = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 2px solid white;
  width: 350px;
  height: 350px;
  padding: 50px;

`;

export const ContainerDescription = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.p`
  font-size: 48px;
  color: white;
  border: 2px solid white;
  padding: 50px;
`;

export const Button = styled.button`
  background-color: white;
  align-self: center;
  display: inline-block;
  color: #212121;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #212121;
  border-radius: 1px;
  display: block;
`;

export const Title = styled.h1`
  font-weight: lighter;
  font-size:48px;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
`;

export const MyName = styled(Title)`
  font-weight: normal;
`;