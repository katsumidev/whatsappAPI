import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Quicksand', sans-serif;
    }
    
    body {
        background-color: var(--main-background);
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: var(--mainText);
        -webkit-background-clip: text;
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
        --accent-color-secundary: #D1F4CC;
        --grey: #7B8890;
        --sendImage-background: #E9EDEF;
        --boxShadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
    }
`;
