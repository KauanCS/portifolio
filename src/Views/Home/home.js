import React from 'react';
import logo from '../../logo.svg';
import './home.css';
import { 
    Button, 
    Title,
    MyName,
    Background,
    ContainerApresentation,
    ContainerHome,
    ContainerWelcome,
    ItemsMenu,
    ContainerName,
    ContainerDescription,
    Description,
    NavBar} from './home.style';

function Home() {
  return (
    <Background>
      <NavBar>
        <ItemsMenu>About</ItemsMenu>
        <ItemsMenu>Experience</ItemsMenu>
        <ItemsMenu>Contact</ItemsMenu>
      </NavBar>
      <ContainerHome>
        <ContainerWelcome>
          <Title>WELCOME</Title>
          <Title>BEM-VINDO</Title>
          <Title>BIENVENUE</Title>
        </ContainerWelcome>
        <ContainerApresentation>
          <ContainerName>
            <Title>Hi,</Title>
            <Title>i am</Title>
            <MyName>KauanCS</MyName>
          </ContainerName>
          <ContainerDescription>
            <Description>
            In Development...
            </Description>
          </ContainerDescription>
        </ContainerApresentation>
      </ContainerHome>
      <Button>Read more</Button>
    </Background>
  );
}

export default Home;
