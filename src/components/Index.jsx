import '../styles/Index.css';
import React from 'react';
import BackgroundContainer from './BackgroundContainer';
import NavigationButton from './NavigationButton';
import Bar from './Bar';

const Index = () => {
  return (
    <BackgroundContainer video='/videos/corvair.mp4' >
      <Bar/>
      <div className="button-container">
        <NavigationButton text="About me" href="about_me"/>
        <NavigationButton text="Projects" href="projects"/>
        <NavigationButton text="My CV" href="my_cv" target="_blank"/>
        <NavigationButton text="GitHub" href="https://github.com/Adam035" target="_blank"/>
        <NavigationButton text="LinkedIn" href="https://www.linkedin.com/in/adam-lipian-0800812a3/" target="_blank"/>
      </div>
    </BackgroundContainer>
  );
}

export default Index;
