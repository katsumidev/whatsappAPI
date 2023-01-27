import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    background-color: #E0E0E0;
    padding: 16px;
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    overflow-y: hidden;

    img {
        width: 42px;
        height: 42px;
        cursor: pointer;
    }
`