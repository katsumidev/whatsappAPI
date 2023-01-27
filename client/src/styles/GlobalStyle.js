import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
        overflow-x: hidden;
    }
    
    body {
        background-color: var(--main-background);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: var(--mainText);
    }

    :root {
        --main-background: #ffffff;
        --mainText: #000000;
        --secundary-background: #EEEEEE;
        --tertiary-background: #E8E5E9;
        --accent-color:  #000000;
        --accent-color-hover:  #353535;
    }
`;