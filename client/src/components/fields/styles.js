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
background-color: ##e5e5e5;
cursor: pointer;
color: #7d7d80;
border: 1px solid;
border-radius: 5px;
margin: 5px;
height: 35px
    :hover {
        border-style: #6445e0;
    }
`

export const AddField = styled.div`
position: right;
border: 1px solid #00c64b;
background: #00c64b;
border-radius: 10px;
width: 50px;
text-align: center;
margin-top: 25px;
cursor: pointer;
` 
export const DownloadButton = styled.button`
background-color: #ffffff;
width: 120px;
height: 30px;
border-radius: 5px;
cursor: pointer;
margin-left: 52%;
margin-right: 5px;
margin-top: 15px;
:hover {
    border-color: #00c64b;
}
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