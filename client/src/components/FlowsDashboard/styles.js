import styled from "styled-components";


export const Container = styled.div`
box-sizing: border-box;
max-width: 390px;
margin: 0 auto;
display: flex;
flex-direction: column;
`

export const Label = styled.div`
display: flex;
`

export const ButtonsContainer = styled.div`
margin-top: 8%;
display: flex;
gap: 1.rem;
height: 42%;
`

export const ButtonView = styled.button`
background-color: green;
`
export const ButtonDelete = styled.button`
background-color: red;
`
export const ButtonUpdate = styled.button`
background-color: blue;
`

export const Itens = styled.div`
display: flex;
background-color: gray;
margin-bottom: 5px;
`

export const CreateButton = styled.button`
background-color: green;
color: #FFF;
    :hover {
        background: transparent;
        color: #000;
    }
`