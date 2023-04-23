import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`



${(props) => props.fonts}

:root{
    --pWhite : #FFFFFF;
    --dark : #070724;
    --darkBlue : #38384F;
    --blue:#2D68F0;
    --grey : #838391;
    --skyC:#419EBB;
    --orangeL : #EDA249;
    --orange:#CD5120;
    --violet : #6D2ED5;
    --redL: #D14C32;
    --red:#D83A34;
    --greenishL:#1EC1A2;



}


*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body{
    max-width: 100vw;
    font-family: 'Antonio';
    color: var(--pWhite);
    background-color: var(--dark);
    background-image: url("./assets/background-stars.svg");  
}
`;

export default GlobalStyle;
