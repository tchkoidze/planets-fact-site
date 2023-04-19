import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import data from "./data.json";
import "./index.css";
import styled, { css } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import HeaderBox from "./pages/Header";
import Planet from "./pages/Planet";
import RenderPlanet from "./RenderPlanets";
import Mercury from "./pages/mercury";
import Mars from "./pages/Mars";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderBox />
      <Routes>
        {/*<Route path="/" element={<HeaderBox />} />*/}
        <Route path="/" element={<Navigate to="/mercury" />} />
        <Route path="/:name" element={<RenderPlanet />} />
      </Routes>
    </>
  );
}

export default App;
