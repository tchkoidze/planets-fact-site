import { Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import GlobalStyle from "./GlobalStyles";
import HeaderBox from "./pages/Header";
import RenderPlanet from "./RenderPlanets";

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderBox />
      <Routes>
        <Route path="/" element={<Navigate to="/Mercury" />} />
        <Route path="/:name" element={<RenderPlanet />} />
      </Routes>
    </>
  );
}

export default App;
