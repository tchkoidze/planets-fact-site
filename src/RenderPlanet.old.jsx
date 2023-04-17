import styled from "styled-components";
import data from "./data.json";

function RenderPlanet(props) {
  const showPlanet = data.filter((planet) => {
    return planet["name"] === props.selectedPlanet;
  });
  console.log(showPlanet);
  //props.setShowSelectedPlanet(showPlanet);

  return (
    <PlanetInfoBox>
      <InfoButtonsBox>
        <OverviewBtn onClick={() => props.setCharacteristics("overview")}>
          Overview
        </OverviewBtn>
        <StructureBtn onClick={() => props.setCharacteristics("structure")}>
          Structure
        </StructureBtn>
        <Surface onClick={() => props.setCharacteristics("geology")}>
          Surface
        </Surface>
      </InfoButtonsBox>
      <PlanetImg src={showPlanet[0]["images"]["planet"]} />
      <PlanetName>{showPlanet[0]["name"]}</PlanetName>
      <CharacteristicText>
        {showPlanet[0][props.characteristics]["content"]}
      </CharacteristicText>
      <Source>
        Source :{" "}
        <SourceLick
          href={showPlanet[0][props.characteristics]["source"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          {" "}
          Wikipedia
        </SourceLick>
      </Source>
      <Properties>
        <Rotation>
          <span>rotation</span>
          <span>{showPlanet[0]["rotation"]}</span>
        </Rotation>
        <Revolution>
          <span>revolution</span>
          <span>{showPlanet[0]["revolution"]}</span>
        </Revolution>
        <Radius>
          <span>radius</span>
          <span>{showPlanet[0]["radius"]}</span>
        </Radius>
        <Temperature>
          <span>temperature</span>
          <span>{showPlanet[0]["temperature"]}</span>
        </Temperature>
      </Properties>
    </PlanetInfoBox>
  );
}

export default RenderPlanet;

const PlanetInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

const InfoButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.23);
`;

const OverviewBtn = styled.button`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  border: none;
  border: none;
  background-color: transparent;
  color: var(--pwhite);
`;
const StructureBtn = styled.button`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: var(--pwhite);
`;
const Surface = styled.button`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 9px;
  line-height: 10px;
  text-align: center;
  letter-spacing: 1.92857px;
  text-transform: uppercase;
  border: none;
  background-color: transparent;
  color: var(--pwhite);
`;

const PlanetImg = styled.img``;
const PlanetName = styled.h1`
  align-self: center;
`;
const CharacteristicText = styled.p``;
const Source = styled.p``;
const SourceLick = styled.a``;
const Properties = styled.div``;
const Rotation = styled.div``;
const Revolution = styled.div``;
const Radius = styled.div``;
const Temperature = styled.div``;
//{props.showSelectedPlanet["images"]["planet"]}
//{showPlanet["images"]["planet"]}
//src="./assets/planet-venus.svg"
