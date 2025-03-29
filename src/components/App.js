import React from "react";
import { HashRouter ,Route, Switch , Routes} from "react-router-dom";
import styled from "styled-components";
import Navigation from "./Navtest";
import Home from "../pages/Home";
import WallpaperEngine from "../pages/WallpaperEngine"
function App() {
  const Container = styled.div`
    align-content: center;
  `;

  return (

    <Container>
      <a id="home" />
      <Navigation />
      <HashRouter >

        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>} />


            <Route path="/wallpaperengine" element={<WallpaperEngine/>} />
          </Routes>
        </div>
      </HashRouter >

      
    </Container>
  );
}
export default App;
