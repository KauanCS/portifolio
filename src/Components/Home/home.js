import React from 'react';
import './home.css';
import Typing from 'react-typing-animation';
import Background from '../../Images/Background.jpg';
import Laptop from '../../Images/laptopImage.png';

const Home = () => {

    return (

        <div className="ContainerHome" id="ContainerHome">

            <div className="ContainerBackground">
                <img src={Background} alt="Background" className="BackgroundImage" />
                <div className="ContainerHomeImage">
                    <img src={Laptop} alt="Background" className="HomeImage" />
                </div>
            </div>

            <div className="ContainerApresentation">
                <Typing startDelay={500} speed={120}>
                    <h1 className="TitleHome">I'm</h1>
                    <h1 className="TitleHome">Kauan C. S.</h1>
                </Typing>
                <Typing startDelay={2600}>
                    <h1 className="TitleHome MainTitle">Web Developer</h1>
                    <Typing.Backspace count={7} delay={1000} />
                    <h1 className="TitleHome MainTitle">sign</h1>
                    <Typing.Backspace count={10} delay={1000} />
                    <h1 className="TitleHome MainTitle">Front-End Student</h1>
                </Typing>
            </div>
        </div>
    );
};

export default Home;
