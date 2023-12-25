import { createGlobalStyle } from "styled-components";


const Global = createGlobalStyle
`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width: 100vw;
        heigth: 100vh;
        font-family: 'Segoe UI', Tamoha, Geneva, Verdana, sans-serif;
    }
`;

export default Global