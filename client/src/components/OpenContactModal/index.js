import React, { useState } from "react";
import { useModalContext } from "../../modal.context";
import {
  Container,
  Background,
  ModalBox,
  ContactNameInput,
  SaveContactBtn,
  ContactEmailInput,
  ContainerLeftPanel,
  ContainerLeftPanelTopPart,
  ContainerLeftPanelAvatar,
  ContainerLeftPanelUserDetails,
  ButtonStartChat,
  ContainerRihtPanel,
  ContainerRightPanelFullName,
  ContentDetail,
  ContentDetailHeader,
  ContentDetailHeaderLabel,
  ContentDetailHeaderLabelAdd,
  ContentDetailItemList,
  ContentDetailItemListItem,
  ItemListItemSpan,
} from "./styles";
import InputMask from "react-input-mask";
import { useParams } from "react-router";
import { AiOutlineInfoCircle } from "../../styles/Icons";
import {MdOutlinePhoneInTalk} from 'react-icons/md';
import {AiOutlineClockCircle} from 'react-icons/ai'
import {BsPeopleFill} from 'react-icons/bs'

function OpenContactModal() {

    const [contactNumber, setContactNumber] = useState(0);
    const [contactName, setContactName] = useState("");
    const [contactEmail, setContactEmail] = useState("");
    const { userIns } = useParams();

    const {
        modalState: { message, visible },
        closeModal,
    } = useModalContext();

    return(
        <Container>
            <Background onClick={() => closeModal()} />
            <ModalBox>
                <ContainerLeftPanel>
                    <div style={{display: 'block'}}>
                        <ContainerLeftPanelTopPart>
                            <div>:</div>
                            <ContainerLeftPanelAvatar>
                            </ContainerLeftPanelAvatar>
                        </ContainerLeftPanelTopPart>
                        <ContainerLeftPanelUserDetails>
                            <div>
                               <MdOutlinePhoneInTalk/> 
                               telefone: +55 81 923131351
                            </div>
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <div>
                            <AiOutlineClockCircle/>
                            Tempo do assinante: Feb 09 2023, 8:47
                            </div>
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <div>
                                <BsPeopleFill/>
                                 Interações: 0
                            </div>
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <div>
                                Código de Indicação: 122552458
                            </div>
                        </ContainerLeftPanelUserDetails>
                        <ContainerLeftPanelUserDetails>
                            <div>
                                # Nenhum atendente atribuído
                            </div>
                        </ContainerLeftPanelUserDetails>
                    </div>
                    <ButtonStartChat>
                        Iniciar bate-papo
                    </ButtonStartChat>
                </ContainerLeftPanel>
                <ContainerRihtPanel>
                    <ContainerRightPanelFullName>
                        <div style={{display: 'block'}}>João</div>
                        <div style={{cursor: 'pointer'}}>✏️</div>
                    </ContainerRightPanelFullName>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>
                                Etiquetas
                            </ContentDetailHeaderLabel>
                            <ContentDetailHeaderLabelAdd>+Adicionar</ContentDetailHeaderLabelAdd>
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            <ContentDetailItemListItem>
                                <ItemListItemSpan>Retornar</ItemListItemSpan>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{cursor: 'pointer', marginLeft: '5px'}}>X</div>
                                </div>
                            </ContentDetailItemListItem>
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>
                                Sequências
                            </ContentDetailHeaderLabel>
                            <ContentDetailHeaderLabelAdd>+Adicionar</ContentDetailHeaderLabelAdd>
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            <ContentDetailItemListItem>
                                <ItemListItemSpan>Retornar</ItemListItemSpan>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{cursor: 'pointer', marginLeft: '5px'}}>X</div>
                                </div>
                            </ContentDetailItemListItem>
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>
                                Campanhas
                            </ContentDetailHeaderLabel>
                            <ContentDetailHeaderLabelAdd>+Adicionar</ContentDetailHeaderLabelAdd>
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            <ContentDetailItemListItem>
                                <ItemListItemSpan>Retornar</ItemListItemSpan>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{cursor: 'pointer', marginLeft: '5px'}}>X</div>
                                </div>
                            </ContentDetailItemListItem>
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>
                                Campos Personalizados
                            </ContentDetailHeaderLabel>
                            <ContentDetailHeaderLabelAdd>+Adicionar</ContentDetailHeaderLabelAdd>
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            <ContentDetailItemListItem>
                                <ItemListItemSpan>Retornar</ItemListItemSpan>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div style={{cursor: 'pointer', marginLeft: '5px'}}>X</div>
                                </div>
                            </ContentDetailItemListItem>
                        </ContentDetailItemList>
                    </ContentDetail>
                </ContainerRihtPanel>
            </ModalBox>
        </Container>
    )
}

export default OpenContactModal;