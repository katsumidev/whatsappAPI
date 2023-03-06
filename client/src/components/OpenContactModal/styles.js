import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  }
`;

export const ContainerLeftPanel = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-right: 1px solid #e9e9e9;
padding-right: 20px;
position: relative;
background-color: var(--main-background);
`

export const ContainerLeftPanelTopPart = styled.div`
display: flex;
align-items: center;
flex-direction: column;
`

export const ContainerLeftPanelAvatar = styled.div`
background-color: #b0c4de;
width: 100px;
height: 140px;
background-size: cover;
border-radius: 50%;
margin-bottom: 20px;
`

export const ContainerLeftPanelUserDetails = styled.div`
margin-top: 10px;
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
font-size: 13px;
line-height: 18px;
color: #777;
`

export const ButtonStartChat = styled.button`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;
cursor: pointer;
vertical-align: middle;
padding: 12px 28px;
border-radius: 4px;
height: 48px;
outline: none;
border: 1px solid rgba(0,0,0,0);
font-weight: 600;
font-size: 13px;
line-height: 20px;
color: #fff;
background-color: #00c64b;
`

export const ContainerRihtPanel = styled.div`
width: 100%;
height: 460px;
overflow-y: scroll;
padding-left: 20px;
`

export const ContainerRightPanelFullName = styled.div`
font-weight: 600;
font-size: 15px;
line-height: 20px;
color: #29292f;
padding-bottom: 12px;
border-bottom: 1px solid #e9e9e9;
display: flex;
justify-content: space-between;
`

export const ContentDetail = styled.div`
padding: 12px 0 16px;
border-bottom: 1px solid #e9e9e9;
min-height: 70px;
`

export const ContentDetailHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 98%;
min-height: 40px;
`

export const ContentDetailHeaderLabel = styled.div`
height: 100%;
text-align: center;
font-weight: 600;
font-size: 15px;
line-height: 20px;
color: #29292f;
margin-bottom: 7px;
`

export const ContentDetailHeaderLabelAdd = styled.span`
font-weight: 600;
font-size: 13px;
line-height: 18px;
cursor: pointer;
color: #6445e0;
`

export const ContentDetailItemList = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

export const ContentDetailItemListItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 300px;
margin-top: 7px;
margin-right: 8px;
font-size: 13px;
line-height: 18px;
color: #29292f;
padding: 3px 8px;
border: 1px solid #29292f;
border-radius: 100px;
`

export const ItemListItemSpan = styled.span`
max-width: 250px;
overflow: hidden;
text-overflow: ellipsis;
`

export const ModalBox = styled.div`
  width: 600px;
  background-color: var(--main-background);
  padding: 16px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  text-align: center;
`;

export const Background = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: -1;
`;

export const SaveContactBtn = styled.input`
  width: 150px !important;
  justify-self: flex-end !important;
  background-color: var(--accent-color);
  color: #fff;
  font-weight: 600;
  margin-top: 50px !important;

  :hover {
    opacity: 0.8;
  }
`;

export const ContactNameInput = styled.input``;

export const ContactEmailInput = styled.input``;
