import React from "react";
import Intro from "./Intro";
import Awards from "./Awards";
import Navigation from "./Navtest";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";
import styled from "styled-components";


function App() {
  const Container = styled.div`
    align-content: center;
  `;

  return (
    
    <Container>
      <a id="home" />
      <Navigation />
      <Intro className="comp" />
      <Fade Up>
        <Awards className="comp" />
      </Fade>
      <Fade Up>
        <Skills className="comp" />
      </Fade>

      <Fade Up>
        <Projects className="comp" />
      </Fade>

      {/* <Footer /> */}
    </Container>
  );
}
export default App;
