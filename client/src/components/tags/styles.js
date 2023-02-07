import styled from "styled-components"


export const AddField = styled.div`
position: right;
margin-left: 65%;
border: 1px solid #00c64b;
background: #00c64b;
border-radius: 10px;
width: 50px;
text-align: center;
margin-top: 15px;
cursor: pointer;
` 

export const ContentTable = styled.table`
border-radius: 5px;
margin-top: 30px;
margin-left: 45px;
max-width: 75%;
display: grid;
align-items: center;
background-color: #fff;
border: 1px solid #e5e5e5;

    tr {
        margin: 10px;
        border-bottom: 1px solid #f3f3f3;
    }


    .titles {
        margin-right: 150px;
    }

    .itens {
        box-shadow: 0 0 0 0;
        border: 0 none;
        outline: 0;
        margin-right: 95px;
    }

    button {
        cursor: pointer;
    }
`