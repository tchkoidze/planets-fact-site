import styled from "styled-components";
import { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Header() {
  const [menuClick, setMenuClick] = useState(false);
  const [backColor, setBackColor] = useState(null);

  let { name } = useParams();

  return (
    <HeaderBox>
      <Logo>The planets</Logo>
      <MenuBurger
        onClick={() => {
          setMenuClick(!menuClick);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="17">
          <g fill="#FFF" fillRule="evenodd">
            <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
          </g>
        </svg>
      </MenuBurger>
      <NavBar menuClick={menuClick}>
        <PlanetList>
          {data.map((e) => {
            console.log(e.color);
            return (
              <PlanetListItem key={e.name} backColor={e.color}>
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <Circle backColor={e.color}></Circle>
                  {/*<div
                  style={{
                    width: "20px",
                    height: "20px",
                    backgroundColor: e.color,
                    borderRadius: "50%",
                  }}
                ></div>*/}
                  <Link
                    to={"/" + e.name}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontFamily: "League Spartan",
                      fontWeight: 700,
                      fontSize: "15px",
                      lineLeight: "25px",
                      letterSpacing: "1.36364px",
                      textTransform: "uppercase",
                    }}
                  >
                    {e["name"]}{" "}
                  </Link>
                </div>

                <ChevronIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                    <path
                      fill="none"
                      stroke="#FFF"
                      opacity=".4"
                      d="M1 0l4 4-4 4"
                    />
                  </svg>
                </ChevronIcon>
              </PlanetListItem>
            );
            //<li key={e["name"]}>{e["name"]}</li>
          })}
        </PlanetList>
      </NavBar>

      {/*{menuClick ? (
        <NavBar>
          <PlanetList>
            {data.map((e) => (
              <PlanetListItem key={e.name}>
                <div
                  style={{ display: "flex", gap: "20px", alignItems: "center" }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      backgroundColor: e.color,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <Link
                    to={"/" + e.name}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontFamily: "League Spartan",
                      fontWeight: 700,
                      fontSize: "15px",
                      lineLeight: "25px",
                      letterSpacing: "1.36364px",
                      textTransform: "uppercase",
                    }}
                  >
                    {e["name"]}{" "}
                  </Link>
                </div>

                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
                  <path
                    fill="none"
                    stroke="#FFF"
                    opacity=".4"
                    d="M1 0l4 4-4 4"
                  />
                </svg>
              </PlanetListItem>

              //<li key={e["name"]}>{e["name"]}</li>
            ))}
          </PlanetList>
        </NavBar>
      ) : null}*/}
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.23);
  @media (min-width: 768px) {
    padding: 32px 53px 27px 51px;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    //padding: 32px 53px 27px 51px;
    justify-content: space-between;
  }
`;

const Logo = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
  @media (min-width: 768px) {
    align-self: center;
  }
`;

const MenuBurger = styled.svg`
  width: 24px;
  height: 17px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

const NavBar = styled.nav`
  flex-basis: 100%;
  display: ${(props) => (props.menuClick ? "block" : "none")};
  @media (min-width: 768px) {
    display: block;
  }
  @media (min-width: 1440px) {
    flex-basis: auto;
  }
`;

const PlanetList = styled.ul`
  list-style: none;
  margin-top: 17px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 1440px) {
    gap: 33px;
    margin: 0;
  }
`;
const PlanetListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
  border-top: 1px solid rgb(255, 255, 255, 0.2);
  @media (min-width: 768px) {
    border: none;
  }
  @media (min-width: 1440px) {
    &:hover {
      border-top: 2px solid ${(props) => props.backColor};
      //background-color: #333;
    }
  }
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.backColor};
  border-radius: 50%;
  @media (min-width: 768px) {
    display: none;
  }
`;

const ChevronIcon = styled.svg`
  width: 6px;
  height: 8px;
  @media (min-width: 768px) {
    display: none;
  }
`;
