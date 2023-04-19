import styled, { css } from "styled-components";

function InfoButtonsContainer(props) {
  return (
    <InfoButtons>
      <OverviewBtn
        onClick={() => props.setCharacteristics("overview")}
        color={props.showPlanet[0]["color"]}
        char={props.characteristics}
      >
        Overview
      </OverviewBtn>
      <StructureBtn
        onClick={() => props.setCharacteristics("structure")}
        color={props.showPlanet[0]["color"]}
        char={props.characteristics}
      >
        Internal Structure
      </StructureBtn>
      <Surface
        onClick={() => props.setCharacteristics("geology")}
        color={props.showPlanet[0]["color"]}
        char={props.characteristics}
      >
        Surface Geology
      </Surface>
    </InfoButtons>
  );
}

export default InfoButtonsContainer;

const InfoButtons = styled.div`
  display: none;

  @media (min-width: 768px) {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

const OverviewBtn = styled.button(
  (props) => css`
    cursor: pointer;
    font-family: "League Spartan";
    font-weight: 700;
    font-size: 9px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    border: none;
    border: none;
    background-color: transparent;
    color: var(--pwhite);
    padding: 7px 0 6px;
    border: 1px solid rgb(255, 255, 255, 0.2);
    background-color: ${(props) =>
      props.char === "overview" ? props.color : "none"};
    &:hover {
      background-color: #d8d8d8;
    }
  `
);
const StructureBtn = styled.button(
  (props) => css`
    cursor: pointer;
    font-family: "League Spartan";
    font-weight: 700;
    font-size: 9px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    color: var(--pwhite);
    padding: 7px 0 6px;
    border: 1px solid rgb(255, 255, 255, 0.2);
    background-color: ${(props) =>
      props.char === "structure" ? props.color : "none"};
    &:hover {
      background-color: #d8d8d8;
    }
  `
);
const Surface = styled.button(
  (props) => css`
    cursor: pointer;
    font-family: "League Spartan";
    font-weight: 700;
    font-size: 9px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 1.92857px;
    text-transform: uppercase;
    border: none;
    background-color: transparent;
    color: var(--pwhite);
    padding: 7px 0 6px;
    border: 1px solid rgb(255, 255, 255, 0.2);
    background-color: ${(props) =>
      props.char === "geology" ? props.color : "none"};
    &:hover {
      background-color: #d8d8d8;
    }
  `
);
