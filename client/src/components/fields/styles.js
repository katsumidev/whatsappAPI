import styled from "styled-components";

export const HeaderContainer = styled.div`
display: flex;
`

export const SelectFieldContainer = styled.div`
margin-left: 15px;
position: left;
display: flex;
margin-top: 15px;
text-align: center;
`

export const SelectField = styled.div`
background-color: #6445e0;
cursor: pointer;
color: #bfb2f2;
border: 1px solid;
border-radius: 5px;
height: 35px
    p:hover {
        color: white;
    }
`

export const AddField = styled.div`
position: right;
margin-left: 52%;
border: 1px solid #00c64b;
background: #00c64b;
border-radius: 10px;
width: 50px;
text-align: center;
margin-top: 15px;
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
        margin-right: 95px;
    }
`