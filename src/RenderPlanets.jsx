import styled, { css } from "styled-components";
import data from "./data.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import InfoButtons from "./pages/InfoButtonsBox";

function RenderPlanet() {
  const [characteristics, setCharacteristics] = useState("overview");

  let { name } = useParams();
  console.log(name);

  const showPlanet = data.filter((e) => e.name == name);

  console.log(data);
  console.log(showPlanet);

  return (
    //<div>{data.find((e) => e.name == name).name}</div>
    <PlanetInfoBox>
      <RenderdInfoBox>
        <InfoButtonsBox>
          <OverviewBtn
            onClick={() => setCharacteristics("overview")}
            color={showPlanet[0]["color"]}
            char={characteristics}
          >
            Overview
          </OverviewBtn>
          <StructureBtn
            onClick={() => setCharacteristics("structure")}
            color={showPlanet[0]["color"]}
            char={characteristics}
          >
            Structure
          </StructureBtn>
          <Surface
            onClick={() => setCharacteristics("geology")}
            color={showPlanet[0]["color"]}
            char={characteristics}
          >
            Surface
          </Surface>
        </InfoButtonsBox>
        <PlanetImgBox>
          <PlanetImg
            src={
              characteristics === "overview"
                ? showPlanet[0]["images"]["planet"]
                : characteristics === "structure"
                ? showPlanet[0]["images"]["internal"]
                : showPlanet[0]["images"]["planet"]
            }
          />
          {characteristics === "geology" ? (
            <GeologyImg src={showPlanet[0]["images"]["geology"]} />
          ) : null}
        </PlanetImgBox>

        <PlanetInfoTextContainer>
          <PlanetInfoText>
            <PlanetName>{showPlanet[0]["name"]}</PlanetName>
            <CharacteristicText>
              {showPlanet[0][characteristics]["content"]}
            </CharacteristicText>
            <Source>
              Source :{" "}
              <SourceLick
                href={showPlanet[0][characteristics]["source"]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Wikipedia{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path
                    fill="#FFF"
                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                    opacity=".5"
                  />
                </svg>
              </SourceLick>
            </Source>
          </PlanetInfoText>
          <InfoButtons
            characteristics={characteristics}
            setCharacteristics={setCharacteristics}
            showPlanet={showPlanet}
          />
        </PlanetInfoTextContainer>
      </RenderdInfoBox>

      <Properties>
        <Rotation>
          <PropertyName>ROTATION TIME</PropertyName>
          <PropertySize>{showPlanet[0]["rotation"]}</PropertySize>
        </Rotation>
        <Revolution>
          <PropertyName>REVOLUTION TIME</PropertyName>
          <PropertySize>{showPlanet[0]["revolution"]}</PropertySize>
        </Revolution>
        <Radius>
          <PropertyName>RADIUS</PropertyName>
          <PropertySize>{showPlanet[0]["radius"]}</PropertySize>
        </Radius>
        <Temperature>
          <PropertyName>AVERAGE TEMP.</PropertyName>
          <PropertySize>{showPlanet[0]["temperature"]}</PropertySize>
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
  @media (min-width: 1440px) {
    gap: 87px;
  }
`;

const InfoButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 24px;
  border-bottom: 1px solid rgb(255, 255, 255, 0.23);
  @media (min-width: 768px) {
    display: none;
  }
`;

const OverviewBtn = styled.button(
  (props) => css`
    cursor: pointer;
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
    padding: 20px 0;
    border-bottom: ${(props) =>
      props.char === "overview" ? `4px solid ${props.color}` : "none"};
  `
);
const StructureBtn = styled.button(
  (props) => css`
    cursor: pointer;
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
    padding: 20px 0;
    border-bottom: ${(props) =>
      props.char === "structure" ? `4px solid ${props.color}` : "none"};
  `
);
const Surface = styled.button(
  (props) => css`
    cursor: pointer;
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
    padding: 20px 0;
    border-bottom: ${(props) =>
      props.char === "geology" ? `4px solid ${props.color}` : "none"};
  `
);

const RenderdInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  @media (min-width: 768px) {
    margin-top: 90px;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    padding: 0 165px;
  }
`;

const PlanetImgBox = styled.div`
  align-self: center;
  position: relative;
  width: 176px;
  @media (min-width: 1440px) {
    width: 50%;
    display: flex;
    justify-content: center;
  }
`;

const PlanetImg = styled.img`
  align-self: center;

  width: 100%;
  @media (min-width: 1440px) {
    width: 50%;
  }
`;
const GeologyImg = styled.img`
  position: absolute;
  bottom: -50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80px;
  height: auto;
`;

const PlanetInfoTextContainer = styled.div`
  padding: 0 24px;
  margin: 98px 0 28px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 69px;
    padding: 0 39px;
  }
  @media (min-width: 1440px) {
    width: 50%;
    flex-direction: column;
    align-items: flex-end;
    gap: 39px;
    margin: 0;
    padding: 0;
  }
`;

const PlanetInfoText = styled.div`
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1440px) {
    width: 63%;
  }
`;

const PlanetName = styled.h1`
  align-self: center;
  font-weight: 400;
  font-size: 40px;
  line-height: 52px;
  text-align: center;
  text-transform: uppercase;
  //margin: 65px 0 16px;
  @media (min-width: 768px) {
    text-align: left;
    line-height: 62px;
  }
  @media (min-width: 1440px) {
    font-size: 80px;
    line-height: 104px;
  }
`;
const CharacteristicText = styled.p`
  text-align: center;
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 22px;
  margin: 16px 0 32px;
  @media (min-width: 768px) {
    margin: 24px 0 32px;
    text-align: left;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
    line-height: 25px;
    margin: 23px 0 24px;
  }
`;
const Source = styled.p`
  align-self: center;
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  color: rgb(255, 255, 255, 0.5);
  //margin: 32px 0 28px;
`;
const SourceLick = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: "League Spartan";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 25px;
  color: rgb(255, 255, 255, 0.5);
`;
const Properties = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.4%;
  padding: 0 24px;
  margin-bottom: 47px;
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 39px;
  }
  @media (min-width: 768px) {
    padding: 0 39px;
  }
  @media (min-width: 1440px) {
    padding: 0 165px;
    margin-bottom: 56px;
  }
`;
const Rotation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 9px 24px 13px 24px;
  border: 1px solid rgb(255, 255, 255, 0.2);
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 24%;
  }
  @media (min-width: 1440px) {
    padding: 20px 23px 27px;
  }
`;

const PropertyName = styled.span`
  font-family: "League Spartan";
  font-weight: 700;
  font-size: 8px;
  line-height: 16px;
  letter-spacing: 0.727273px;
  text-transform: uppercase;

  color: rgb(255, 255, 255, 0.5);
  @media (min-width: 768px) {
  }
  @media (min-width: 1440px) {
    font-size: 11px;
    line-height: 25px;
    letter-spacing: 1px;
  }
`;
const PropertySize = styled.span`
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: right;
  letter-spacing: -0.75px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 24px;
    line-height: 31px;
  }
  @media (min-width: 1440px) {
    font-size: 40px;
    line-height: 52px;
  }
`;

const Revolution = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 24px 13px 24px;
  border: 1px solid rgb(255, 255, 255, 0.2);
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 24%;
  }
  @media (min-width: 1440px) {
    padding: 20px 23px 27px;
  }
`;
const Radius = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 24px 13px 24px;

  border: 1px solid rgb(255, 255, 255, 0.2);
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 24%;
  }
  @media (min-width: 1440px) {
    padding: 20px 23px 27px;
  }
`;
const Temperature = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 9px 24px 13px 24px;

  border: 1px solid rgb(255, 255, 255, 0.2);
  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    min-width: 24%;
  }
  @media (min-width: 1440px) {
    padding: 20px 23px 27px;
  }
`;

//{props.showSelectedPlanet["images"]["planet"]}
//{showPlanet["images"]["planet"]}
//src="./assets/planet-venus.svg"

//showPlanet[0]["images"]["planet"]
