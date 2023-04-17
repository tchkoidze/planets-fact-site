import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import data from "./data.json";
import styled, { css } from "styled-components";
import GlobalStyle from "./GlobalStyles";

import RenderPlanet from "./RenderPlanets";

function App() {
  const [menuClick, setMenuClick] = useState(false);
  const [showSelectedPlanet, setShowSelectedPlanet] = useState([]);
  const [selectedPlanet, setSelectedPlanet] = useState("Mercury");
  const [characteristics, setCharacteristics] = useState("overview");

  console.log(showSelectedPlanet);
  console.log(selectedPlanet);

  console.log(menuClick);
  console.log(characteristics);
  return (
    <Main>
      <GlobalStyle />

      <Header>
        <Logo>the planets</Logo>
        <HumburgerMenu
          onClick={() => {
            setMenuClick(!menuClick);
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
            <g fill="#FFF" fillRule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </HumburgerMenu>
      </Header>
      {menuClick ? (
        <Planetsmenu>
          <Mercury
            onClick={() => {
              setSelectedPlanet("Mercury");
            }}
          >
            Mercury
          </Mercury>
          <Venus
            onClick={() => {
              setSelectedPlanet("Venus");
            }}
          >
            Venus
          </Venus>
          <Earth
            onClick={() => {
              setSelectedPlanet("Earth");
            }}
          >
            Earth
          </Earth>
        </Planetsmenu>
      ) : null}
      {/*{!menuClick ? <RenderedPlanet></RenderedPlanet> : ""}*/}
      {!menuClick ? (
        <RenderPlanet
          selectedPlanet={selectedPlanet}
          showSelectedPlanet={showSelectedPlanet}
          characteristics={characteristics}
          setSelectedPlanet={setSelectedPlanet}
          setShowSelectedPlanet={setShowSelectedPlanet}
          setCharacteristics={setCharacteristics}
        ></RenderPlanet>
      ) : (
        ""
      )}
      {/*<RenderPlanet
        selectedPlanet={selectedPlanet}
        showSelectedPlanet={showSelectedPlanet}
        setSelectedPlanet={setSelectedPlanet}
        setShowSelectedPlanet={setShowSelectedPlanet}
      ></RenderPlanet>*/}
    </Main>
  );
}

export default App;

const Main = styled.main`
  width: 100%;
  height: 100%;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.2);
`;

const Logo = styled.p`
  font-family: "Pangolin";
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const HumburgerMenu = styled.svg`
  width: 24px;
  height: 17px;
  cursor: pointer;
`;

const Planetsmenu = styled.ul`
  /*display: ${(props) => (props.clicke ? "none" : "block")};*/
  flex-direction: column;
  list-style: none;
`;

const Mercury = styled.li`
  padding: 20px 24px;
  border-bottom: 1px solid red;
  cursor: pointer;
`;

const Venus = styled.li`
  padding: 20px 24px;
  border-bottom: 1px solid var(--greenishL);
  cursor: pointer;
`;

const Earth = styled.li`
  padding: 20px 24px;
  border-bottom: 1px solid var(--greenishL);
  cursor: pointer;
`;
/*const RedText = styled.p`
  color: red;
  font-size: 2em;
`;

const CommonText = styled.p(
  (props) => css`
    font-size: 3em;
    color: ${props.color};
  `
);*/

//selectedPlanet = "Venus";
/*const showPlanet = data.filter((planet) => {
                return planet["name"] === "Venus";
              });
              console.log(showPlanet);
setShowSelectedPlanet(showPlanet);*/

/*onClick={() => {
              const showPlanet = data.filter((planet) => {
                return planet["name"] === "Earth";
              });
              console.log(showPlanet);
              setShowSelectedPlanet(showPlanet); 
}}*/
