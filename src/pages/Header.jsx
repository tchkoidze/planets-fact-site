import styled from "styled-components";
import { useState } from "react";
import data from "../data.json";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Header() {
  const [menuClick, setMenuClick] = useState(false);

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

      {menuClick ? (
        <NavBar>
          <PlanetList>
            {data.map((e) => (
              <li key={e.name}>
                <Link to={"/" + e.name}>{e["name"]} </Link>
              </li>

              //<li key={e["name"]}>{e["name"]}</li>
            ))}
          </PlanetList>
        </NavBar>
      ) : null}
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
`;

const Logo = styled.p`
  font-weight: 400;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -1.05px;
  text-transform: uppercase;
`;

const MenuBurger = styled.svg`
  width: 24px;
  height: 17px;
  cursor: pointer;
`;

const NavBar = styled.nav`
  flex-basis: 100%;
`;

const PlanetList = styled.ul``;
const planetListItem = styled.li;
