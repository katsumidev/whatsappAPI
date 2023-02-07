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
        --secundaryText: #696969;
        --secundary-background: #F0F2F5;
        --tertiary-background: #F5F6F6;
        --chat-background: #F4F1EB;
        --accent-color: #D9FDD3;
        --accent-color-hover:  #14C38E;
        --grey: #7B8890;
    }
`;
