import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { createTagForContact, createTagForUser, deleteTagForContact, getAllTags } from "../../services/api";

function OpenContactModal({number, name, contact}) {
    const [isSelectSequence, setIsSelectSequence] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const [tagsSelect, setTagsSelect] = useState([]);
    const [tag, setTag] = useState();
    const [tagForDelete, setTagForDelete] = useState()
    const selectRef = useRef(null);
    const { userIns } = useParams();


    const userToken = localStorage.getItem('userToken')

    const handleTagClick = (tagName, tag) => {
        if (!selectedTags.includes(tagName)) {
        setSelectedTags([...selectedTags, tagName]);
        setTag(tag)
        }
    };

    const handleAddTag = useCallback(async() => {
        await createTagForContact(userToken, number, tag).then(() => console.log('foi'))
    }, [tag, selectedTags])

    const handleRemove = (tagName) => {
        setSelectedTags(tags => tags.filter(tag => tag !== tagName))
    }
    
    const handleRemoveTags = async (tagName) => {
        tagsSelect.map((tag) => {
            tag.tags.map((item) => {
                if(item.name === tagName) setTagForDelete(item);
            })
        });

        await deleteTagForContact(userToken, number, tagForDelete).then(() => console.log('apagado'))
    }

    useEffect(() => {
        function handleClickOutside(event) {
          if (selectRef.current && !selectRef.current.contains(event.target)) {
            setIsSelectSequence(false)
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [selectRef]);

    const {
        modalState: { message, visible },
        closeModal,
    } = useModalContext();


    useEffect(() => {
        const getAlltagsforUser = async () => {
            const tags = await getAllTags(userToken);
            setTagsSelect(tags)
            tags.map((tag) => {
                tag.tags.map((item) => {
                    console.log(JSON.stringify(item))
                })
            })
        }
        getAlltagsforUser()
    }, [])

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
                               telefone: +{number}
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
                        <div style={{display: 'block'}}>{name}</div>
                        <div style={{cursor: 'pointer'}}>✏️</div>
                    </ContainerRightPanelFullName>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>
                                Etiquetas
                            </ContentDetailHeaderLabel>
                            {isSelectSequence === 'tags' ? (
                                <div ref={selectRef}>
                                    <select multiple>
                                        {tagsSelect.map((items) => {
                                            return items.tags.map((tag, index) => (
                                                <option key={index} value={tag.name} onClick={() => {
                                                    handleTagClick(tag.name, tag)
                                                    handleAddTag()
                                                    }}>
                                                    {tag.name}
                                                </option>
                                            ))
                                        })}
                                    </select>
                                </div>
                            ): (
                                <ContentDetailHeaderLabelAdd 
                                    onClick={() => setIsSelectSequence('tags')}
                                    >
                                        +Adicionar
                                </ContentDetailHeaderLabelAdd>
                            )}
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                        {selectedTags.map((tagName) => (
                                <ContentDetailItemListItem>
                                    <ItemListItemSpan 
                                    key={tagName}
                                    >
                                        {tagName}
                                </ItemListItemSpan>
                                    <div 
                                    style={
                                        {display: 'flex', justifyContent: 'space-between'}
                                        }
                                        >
                                        <div 
                                            style={{cursor: 'pointer', marginLeft: '5px'}} 
                                            onClick={() => {
                                                handleRemove(tagName)
                                                handleRemoveTags(tagName)
                                            }}
                                        >
                                            X
                                        </div>
                                    </div>
                                </ContentDetailItemListItem>
                            ))}
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>
                                Sequências
                            </ContentDetailHeaderLabel>
                            {isSelectSequence === 'sequence' ? (
                                <div ref={selectRef}>
                                    <select>
                                        <option value='3'>teste</option>
                                    </select>
                                </div>
                            ): (
                            <ContentDetailHeaderLabelAdd onClick={() => setIsSelectSequence('sequence')}>+Adicionar</ContentDetailHeaderLabelAdd>
                            )}
                        </ContentDetailHeader>
                        <ContentDetailItemList>
                            {selectedTags.map((tagName) => (
                                <ContentDetailItemListItem>
                                    <ItemListItemSpan>Retornar</ItemListItemSpan>
                                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <div style={{cursor: 'pointer', marginLeft: '5px'}}>X</div>
                                    </div>
                                </ContentDetailItemListItem>
                            ))}
                        </ContentDetailItemList>
                    </ContentDetail>
                    <ContentDetail>
                        <ContentDetailHeader>
                            <ContentDetailHeaderLabel>
                                Campanhas
                            </ContentDetailHeaderLabel>
                            {isSelectSequence === 'campaign' ? (
                                <div ref={selectRef}>
                                    <select>
                                        <option value='3'>teste</option>
                                    </select>
                                </div>
                            ): (
                            <ContentDetailHeaderLabelAdd onClick={() => setIsSelectSequence('campaign')}>+Adicionar</ContentDetailHeaderLabelAdd>
                            )}
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
                            {isSelectSequence === 'fields' ? (
                                <div ref={selectRef}>
                                    <select>
                                        <option value='3'>teste</option>
                                    </select>
                                </div>
                            ): (
                            <ContentDetailHeaderLabelAdd onClick={() => setIsSelectSequence('fields')}>+Adicionar</ContentDetailHeaderLabelAdd>
                            )}                        </ContentDetailHeader>
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