import React from 'react';
import ReactDOM from 'react-dom/client';
import Fade from 'react-reveal/Fade';


import Navigation from './components/Navtest';
import Intro from './components/Intro';
import Awards from './components/Awards';
import reportWebVitals from './reportWebVitals';
import styled from 'styled-components';
import GlobalStyle from './globalStyle';
import Skills from './components/Skills';
import Projects from './components/Projects';
import 'bootstrap/dist/css/bootstrap.min.css';




const Container = styled.div`

      align-content:center;

  `;




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <GlobalStyle />
    <a id="home" />

      <Container>
        <Navigation/>
        <Intro className="comp" />
        <Fade Up><Awards className="comp" /></Fade>
        <Fade Up>
          <Skills className="comp" />
        </Fade>

        <Fade Up><Projects /></Fade>

      
      </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
