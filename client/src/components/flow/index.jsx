import React, { useCallback, useEffect, useState } from "react";
import ReactFlow, {
  Background,
  ConnectionMode,
  Controls,
  addEdge,
  useEdgesState,
  useNodesState,
  MarkerType,
} from "reactflow";
import "reactflow/dist/style.css";
import "reactflow/dist/base.css";
import ContetntSquare from "../nodes/content";
import ButtonSquare from "../nodes/buttons";
import ConditionSquare from "../nodes/conditions";
import ConnectionSquare from "../nodes/connection";
import RandomSquare from "../nodes/random";
import DelaySquare from "../nodes/delay";
import IntegrationSquare from "../nodes/integration";
import {
  AiOutlineClockCircle,
  BsLightningCharge,
  BsArrowsAngleContract,
  BsArrowsAngleExpand,
  TbArrowFork,
  BiBookContent,
  BsListUl,
} from "../../styles/Icons";
import ActionSquare from "../nodes/action";
import {
  ActionBody,
  ActionHeader,
  ButtonHeader,
  ConditionBody,
  ConditionHeader,
  ConnectionBody,
  ConnectionHeader,
  Container,
  ContentBody,
  ContentHeader,
  DelayHeader,
  DelayRange,
  InputRange,
  InputTimeDelay,
  Modal,
  RandomHeader,
  SelectElement,
  AddNodeBtn,
  DelayBody,
  Options,
  CardsButtonsContent,
  CardButtons,
  CardIconButton,
  CardTextButton,
  ContainerTextArea,
  MenuText,
  MenuLeft,
  MenuItem,
  SpanItem,
  MenuGroupLeft,
  MenuItemDrop,
  SpanItemMenuDrop,
  TextArea,
  ButtonDelete,
  CreateNewButton,
  SelectCondition,
  InputRangeRandomContainer
} from "./styles";
import { useParams } from "react-router";
import ConnectionLine from "./ConnectionLine";
import CustomEdge from "./CustomEdge";
import { useSelector } from "react-redux";
import {
  CircleMenu,
  CircleMenuItem,
} from "react-circular-menu";
import {AiOutlineFileAdd, AiFillSave} from 'react-icons/ai'
import {CiImageOn} from 'react-icons/ci'
import {RxVideo} from 'react-icons/rx'
import {FiFile} from 'react-icons/fi'
import {MdOutlineKeyboardVoice} from 'react-icons/md'
import {TbAlertTriangle} from 'react-icons/tb'
/*
  Notes: 
  Nodes = Tudo que vai aparecer em tela(Pode ter seu próprio estilo e configuração),
  Edges = As conexões(As linhas de conexão, também possuindo suas próprias configurações)
*/

const NODE_TYPES = {
  square: ContetntSquare,
  button: ButtonSquare,
  action: ActionSquare,
  condition: ConditionSquare,
  connection: ConnectionSquare,
  random: RandomSquare,
  delay: DelaySquare,
  integration: IntegrationSquare,
};

let idNode = 0;

const getId = () => `nodeid_${idNode++}`
// data = transporta informações da aplicação até os Nodes
const INITIAL_NODES = [
  {
    id: getId(),
    type: "button",
    position: {
      x: 200,
      y: 400,
    },
    data: {},
  },
  {
    id: getId(),
    type: "square",
    position: {
      x: 1000,
      y: 400,
    },
    data: {
      conteudo: "oi",
    },
  },
];

const ConditionSelectList = [
  "etiqueta",
  "Dia da semana ao passar por aqui",
  "Horário de atendimento",
  "Hora ao passar por aqui",
  "Nome completo",
  "Primeiro nome",
  "Sobrenome",
  "DDD",
  "Telefone",
];

const ConnectionSelectList = [
  "Quer Reembolsar / trocar",
  "Saudação",
  "Quer reagendar",
  "Quer cancelar",
  "Esquenta chip 1",
  "Entregador está a caminho",
  "Retorno",
  "Não saiu para rota",
  "Pedidos Agendados",
];

function Flow() {
  const [edges, setEdges, onEdgesChanges] = useEdgesState([]);
  const [nodes, setNodes, onNodesChanges] = useNodesState(INITIAL_NODES);
  const [activeTyping, setActiveTyping] = useState();
  const [answers, setAnswers] = useState();
  const [actionSelect, setActionSelect] = useState();
  const [conditionSelect, setConditionSelect] = useState(ConditionSelectList);
  const [connectionSelect, setConnectionSelect] = useState(ConnectionSelectList);
  const [conditionValue, setConditionValue] = useState('Quer Reembolsar / trocar');
  const [isOpen, setIsOpen] = useState('aberto')
  const [connectionValue, setConnectionValue] = useState("");
  const [delayTime, setDelayTime] = useState(5);
  const [delayFormat, setDelayFormat] = useState();

  /*Update nodes feature*/

  

  //Content Square State
  const [inputsContent, setInputsContent] = useState([{ value: 3, idNode: '' }])
  const [textAreaContent, setTextAreaContent] = useState([{ value: '' }])
  const [imageContent, setImageContent] = useState([{ value: '' }])
  const [videoContent, setVideoContent] = useState([{ value: '' }])
  const [fileContent, setFileContent] = useState([{ value: '' }])
  const [audioContent, setAudioContent] = useState([{ value: '' }])

  //Content Square Funcs
  const handleAddRangesInputs = (id) => {
    setInputsContent(ranges => [
      ...ranges,
      {
        value: '',
        idNode: id
      }
    ])
  };

  const handleRemoveInput = (index) => {
    setInputsContent(inputsContent.filter((_, i) => i !== index));
  };

  const handleChangeInputs = (index, event) => {
    const values = [...inputsContent];
    values[index].value = event.target.value;
    setInputsContent(values);
  }

  const handleRemoveTextArea = (index) => {
    setTextAreaContent(textAreaContent.filter((_, i) => i !== index));
  };

  const handleChangeTextArea = (index, event) => {
    const values = [...textAreaContent];
    values[index].value = event.target.value;
    setTextAreaContent(values);
  }

  const handleAddTextArea = (e) => {
    setTextAreaContent(content => [
      ...content,
      {
        value: ''
      }
    ])
  };

  const handleRemoveImage = (index) => {
    setImageContent(imageContent.filter((_, i) => i !== index));
  };

  const handleChangeImage = (index, event) => {
    const values = [...imageContent];
    values[index].value = event.current.files[0];
    setImageContent(values);
  }

  const handleAddImage = (e) => {
    setImageContent(content => [
      ...content,
      {
        value: ''
      }
    ])
  };

  const handleRemoveVideo = (index) => {
    setVideoContent(videoContent.filter((_, i) => i !== index));
  };

  const handleChangeVideo = (index, event) => {
    const values = [...videoContent];
    values[index].value = event.current.files[0];
    setVideoContent(values);
  }

  const handleAddVideo = (e) => {
    setVideoContent(content => [
      ...content,
      {
        value: ''
      }
    ])
  };

  const handleRemoveFile = (index) => {
    setFileContent(fileContent.filter((_, i) => i !== index));
  };

  const handleChangeFile = (index, event) => {
    const values = [...fileContent];
    values[index].value = event.current.files[0]
    setFileContent(values);
  }

  const handleAddFile = (e) => {
    setFileContent(content => [
      ...content,
      {
        value: ''
      }
    ])
  };

  const handleRemoveAudio = (index) => {
    setAudioContent(fileContent.filter((_, i) => i !== index));
  };

  const handleChangeAudio = (index, event) => {
    const values = [...audioContent];
    values[index].value = event.current.files[0];
    setAudioContent(values);
  }

  const handleAddAudio = (e) => {
    setAudioContent(content => [
      ...content,
      {
        value: ''
      }
    ])
  };

  // Button Square
  const [textAreaButton, setTextAreaButton] = useState([{ value: '' }])

  const handleRemoveTextAreaButton = (index) => {
    setTextAreaButton(textAreaButton.filter((_, i) => i !== index));
  };

  const handleChangeTextAreaButton = (index, event) => {
    const values = [...textAreaButton];
    values[index].value = event.target.value;
    setTextAreaButton(values);
  }

  const handleAddTextAreaButton = (e) => {
    setTextAreaButton(content => [
      ...content,
      {
        value: ''
      }
    ])
  };

  // Random Square State
  const [rangeInputRandom, setRangeInputRandom] = useState([{ value: '' }]);

  // Random Square Funcs
  const handleRemoveRangeInput = (index) => {
    setRangeInputRandom(rangeInputRandom.filter((_, i) => i !== index));
  };

  const handleChangeRangeInput = (index, event) => {
    const values = [...rangeInputRandom];
    values[index].value = event.target.value;
    setRangeInputRandom(values);
  }

  const handleAddRangeInput = (e) => {
    setRangeInputRandom(content => [
      ...content,
      {
        value: ''
      }
    ])
  };


  const node = useSelector((state) => state.node);
  console.log(`Id passado no redux: ${node.node.id}`)

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          delayTime: delayTime
        }
      }
      return nodesMap
    }))
  }, [delayTime, setNodes]);

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          delayFormat: delayFormat
        }
      }
      return nodesMap
    }))
  }, [delayFormat, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          actionSelect: actionSelect
        }
      }
      return nodesMap
    }))
  }, [actionSelect, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          connection: connectionValue
        }
      }
      return nodesMap
    }))
  }, [connectionValue, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          answers: answers
        }
      }
      return nodesMap
    }))
  }, [answers, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          textAreaB: textAreaButton
        }
      }
      return nodesMap
    }))
  }, [textAreaButton, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          isOpen: isOpen
        }
      }
      return nodesMap
    }))
  }, [isOpen, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          condition: conditionValue
        }
      }
      return nodesMap
    }))
  }, [conditionValue, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          randomRange: rangeInputRandom
        }
      }
      return nodesMap
    }))
  }, [rangeInputRandom, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          range: inputsContent
        }
      }
      return nodesMap
    }))
  }, [inputsContent, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          image: imageContent
        }
      }
      return nodesMap
    }))
  }, [imageContent, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          video: videoContent
        }
      }
      return nodesMap
    }))
  }, [videoContent, setNodes]);
 
  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          file: fileContent
        }
      }
      return nodesMap
    }))
  }, [fileContent, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          audio: audioContent
        }
      }
      return nodesMap
    }))
  }, [audioContent, setNodes]); 

  useEffect(() => {
    setNodes((nds) => nds.map((nodesMap) => {
      if(nodesMap.id === node.node.id) {
        nodesMap.data = {
          ...nodesMap.data,
          text: textAreaContent
        }
      }
      return nodesMap
    }))
  }, [textAreaContent, setNodes]); 

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  function addSquareNode(type) {
    setNodes((nodes) => [
      ...nodes,
      {
        id: getId(),
        type: type,
        position: {
          x: 750,
          y: 350,
        },
        data: {},
      },
    ]);
  }

  const edgeTypes = {
    custom: CustomEdge,
  };

  const edgeOptions = {
    animated: true,
    style: {
      stroke: " #000",
      strokeWidth: 3,
    },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 15,
      height: 15,
      color: "#14C38E",
    },
  };

  return (
    <>
      {node.isClicked && (
        <Modal>
          {node.node.type === "content" && (
            <>
              <ContentHeader>Conteúdo</ContentHeader>
              <ContentBody>
                {inputsContent.map((input, index) => {
                  return (
                    <DelayRange>
                      <InputRange
                        type="range"
                        max={6}
                        value={input.value}
                        onChange={(e) => handleChangeInputs(index, e)}
                      />
                      <strong>{input.value}seg</strong>
                      <br />
                      <label>
                        <input
                          type="checkbox"
                          value={activeTyping}
                          onChange={(e) => setActiveTyping(e.target.value)}
                        />
                        <strong>Ativar Digitando</strong>
                      </label>
                      <ButtonDelete onClick={() => handleRemoveInput(index)}>Deletar</ButtonDelete>
                    </DelayRange>
                  )
                })}
                {textAreaContent.map((input, index) => {
                  return (
                    <>
                      <ContainerTextArea>
                        <MenuText>
                          <MenuLeft>
                            <MenuItem>
                              <SpanItem>
                                <b>B</b>
                              </SpanItem>
                            </MenuItem>
                            <MenuItem>
                              <SpanItem>
                                <i>I</i>
                              </SpanItem>
                            </MenuItem>
                            <MenuItem>
                              <SpanItem>
                                <del>S</del>
                              </SpanItem>
                            </MenuItem>
                          </MenuLeft>
                          <MenuGroupLeft>
                            <MenuItemDrop>
                              <SpanItemMenuDrop>
                              numero-de-indicacoes
                              </SpanItemMenuDrop>
                            </MenuItemDrop>
                          </MenuGroupLeft>
                        </MenuText>
                        <TextArea value={input.value} onChange={(e) => handleChangeTextArea(index, e)} />
                      <ButtonDelete onClick={() => handleRemoveTextArea(index)}>Deletar</ButtonDelete>
                      </ContainerTextArea>
                    </>
                  )
                 })}
                  {imageContent.map((input, index) => {
                  return (
                    <>
                    <DelayRange>
                      Tipos de arquivos aceitos: jpg, jpeg, png, webp
                    <input type="file"  accept=".jpg,.jpeg,.png,.webp" size="2000000" aria-label="Só aceitamos" value={input.value} onChange={(e) => handleChangeImage(index, e)} />
                    </DelayRange>
                    <ButtonDelete onClick={() => handleRemoveImage(index)}>Deletar</ButtonDelete>
                    </>
                  )
                 })}
                 {videoContent.map((input, index) => {
                  return (
                    <DelayRange>
                    <p>
                      Formatos aceitos .mp4
                      Tamanho máx.: 5MB
                    </p>
                    <input type="file" 
                      accept=".mp3" 
                      size="5000000" 
                      aria-label="Só aceitamos" 
                      value={input.value} 
                      onChange={(e) => handleChangeVideo(index, e)} 
                    />
                    <ButtonDelete onClick={() => handleRemoveVideo(index)}>Deletar</ButtonDelete>
                    </DelayRange>
                  )
                 })}
                  {fileContent.map((input, index) => {
                  return (
                    <DelayRange>
                    <p>Formatos</p>
                    <input type="file" 
                      accept=".pdf,.doc,.docx,.htm,.html,.json,.xml,.txt,.csv,.zip,.7z,.xls,.xlsx,.ppt,.pptx" 
                      value={input.value} 
                      onChange={(e) => handleChangeFile(index, e)} 
                    />
                    <ButtonDelete onClick={() => handleRemoveFile(index)}>Deletar</ButtonDelete>
                    </DelayRange>
                  )
                 })}
                  {audioContent.map((input, index) => {
                  return (
                    <DelayRange>
                    <p>
                      Subir Áudio
                      Formatos aceitos .mp3
                      Tamanho máx.: 5MB
                    </p>
                    
                    <input type="file"  accept=".mp3" size="5000000" aria-label="Só aceitamos" value={input.value} onChange={(e) => handleChangeAudio(index, e)} />
                    <ButtonDelete onClick={() => handleRemoveAudio(index)}>Deletar</ButtonDelete>
                    </DelayRange>
                  )
                 })}
              </ContentBody>
              <CardsButtonsContent>
                <CardButtons onClick={handleAddTextArea}>
                  <CardIconButton><AiOutlineFileAdd/></CardIconButton>  
                  <CardTextButton>Texto</CardTextButton>
                </CardButtons>  
                <CardButtons onClick={handleAddImage}>
                  <CardIconButton><CiImageOn/></CardIconButton>  
                  <CardTextButton>Imagem</CardTextButton>
                </CardButtons>  
                <CardButtons onClick={handleAddVideo}>
                  <CardIconButton><RxVideo/></CardIconButton>  
                  <CardTextButton>Video</CardTextButton>
                </CardButtons>  
                <CardButtons onClick={handleAddFile}>
                  <CardIconButton><FiFile/></CardIconButton>  
                  <CardTextButton>Arquivo</CardTextButton>
                </CardButtons>  
                <CardButtons onClick={handleAddAudio}>
                  <CardIconButton><MdOutlineKeyboardVoice/></CardIconButton>  
                  <CardTextButton>Audio</CardTextButton>
                </CardButtons>  
                <CardButtons>
                  <CardIconButton><AiFillSave/></CardIconButton>  
                  <CardTextButton>Salvar</CardTextButton>
                </CardButtons>  
                <CardButtons onClick={() => handleAddRangesInputs(node.node.id)}>
                  <CardIconButton><AiOutlineClockCircle/></CardIconButton>  
                  <CardTextButton>Delay</CardTextButton>
                </CardButtons>  
                <CardButtons>
                  <CardIconButton><TbAlertTriangle/></CardIconButton>  
                  <CardTextButton>Auto Off</CardTextButton>
                </CardButtons>  
              </CardsButtonsContent>
            </>
          )}
          {node.node.type === "random" && (
            <>
              <RandomHeader>Randomizador</RandomHeader>
              <p>ATENÇÃO! O soma total deve ser 100%</p>
              {rangeInputRandom.map((input, index) => {
                return (
                  <>
                  <InputRangeRandomContainer>
                    <p>{index + 1}</p>
                    <InputRange type="range" 
                    value={input.value} 
                    onChange={(e) => handleChangeRangeInput(index, e)}
                    />
                    <span>{input.value}%</span>
                    <button style={{background: 'transparent', border: 'none', paddingBottom: '15px'}} onClick={() => handleRemoveRangeInput(index)}>X</button>
                  </InputRangeRandomContainer>
                  </>
                )
              })}
              <CreateNewButton onClick={rangeInputRandom.length === 5 ? null : handleAddRangeInput}>+ Criar novo Botão</CreateNewButton>
            </>
          )}
          {node.node.type === "action" && (
            <>
              <ActionHeader>Ação</ActionHeader>
              <ActionBody>
                <label>Inscrição em Sequência</label>
                {/* <SelectElement
                  onChange={(e) => setActionSelect(e.target.value)}
                  value={actionSelect}
                  classNamePrefix="react-select"
                  options={[
                    { value: "esquentaChip", label: "Esquenta Chip" },
                    { value: "8hours", label: "8 Horas do dia seguinte" },
                  ]}
                />
                <ButtonDelete onClick={handleSaveAction}>Salvar</ButtonDelete> */}
                <select
                  name="registration"
                  value={actionSelect}
                  onChange={(e) => setActionSelect(e.target.value)}
                >
                  <option value="esquentaChip">Esquenta Chip</option>
                  <option value="8hours">8 Horas do dia seguinte</option>
                </select>
              </ActionBody>
            </>
          )}
          {node.node.type === "button" && (
            <>
              <ButtonHeader>Botões</ButtonHeader>
              <p>Texto da pergunta</p>
              <ContainerTextArea>
                        <MenuText>
                          <MenuLeft>
                            <MenuItem>
                              <SpanItem>
                                <b>B</b>
                              </SpanItem>
                            </MenuItem>
                            <MenuItem>
                              <SpanItem>
                                <i>I</i>
                              </SpanItem>
                            </MenuItem>
                            <MenuItem>
                              <SpanItem>
                                <del>S</del>
                              </SpanItem>
                            </MenuItem>
                          </MenuLeft>
                          <MenuGroupLeft>
                            <MenuItemDrop>
                              <SpanItemMenuDrop>
                              numero-de-indicacoes
                              </SpanItemMenuDrop>
                            </MenuItemDrop>
                          </MenuGroupLeft>
                        </MenuText>
                        <TextArea value={answers}
                          onChange={(e) => setAnswers(e.target.value)} />
                  </ContainerTextArea>
                  <hr />
              {textAreaButton.map((input, index) => {
                return (
                  <ContainerTextArea>
                        <MenuText>
                          <MenuLeft>
                            <MenuItem>
                              <SpanItem>
                                <b>B</b>
                              </SpanItem>
                            </MenuItem>
                            <MenuItem>
                              <SpanItem>
                                <i>I</i>
                              </SpanItem>
                            </MenuItem>
                            <MenuItem>
                              <SpanItem>
                                <del>S</del>
                              </SpanItem>
                            </MenuItem>
                          </MenuLeft>
                          <MenuGroupLeft>
                            <MenuItemDrop>
                              <SpanItemMenuDrop>
                              numero-de-indicacoes
                              </SpanItemMenuDrop>
                            </MenuItemDrop>
                          </MenuGroupLeft>
                        </MenuText>
                        <TextArea value={input.value}
                          onChange={(e) => handleChangeTextAreaButton(index, e)} />
                      <ButtonDelete onClick={() => handleRemoveTextAreaButton(index)}>Deletar</ButtonDelete>
                  </ContainerTextArea>
                )
              })}
              <CreateNewButton onClick={(e) => handleAddTextAreaButton(e)}>
                + Novo botão
              </CreateNewButton>
            </>
          )}
          {node.node.type === "condition" && (
            <>
              <ConditionHeader>Condição</ConditionHeader>
              <p>O contato deve possuir <b>Alguma</b> das condições abaixo para ser verdadeiro</p>
              <ConditionBody>
                <DelayRange>
                <SelectCondition
                  onChange={(e) => setIsOpen(e.target.value)}
                  value={isOpen}
                >
                  <option value="aberto"><b>É</b> Aberto</option>
                  <option value="fechado"><b>É</b> Fechado</option>
                </SelectCondition>
                </DelayRange>
                <SelectCondition
                  onChange={(e) => setConditionValue(e.target.value)}
                  value={conditionValue}
                >
                  {conditionSelect.map((cond, index) => {
                    return (
                      <option key={index} value={cond}>
                        {cond}
                      </option>
                    );
                  })}
                </SelectCondition>
              </ConditionBody>
            </>
          )}
          {node.node.type === "connection" && (
            <>
              <ConnectionHeader>Conexão de fluxo</ConnectionHeader>
              <ConnectionBody>
                <SelectCondition
                  name=""
                  id=""
                  onChange={(e) => setConnectionValue(e.target.value)}
                  value={connectionValue}
                >
                  {connectionSelect.map((conn, index) => {
                    return (
                      <option key={index} value={conn}>
                        {conn}
                      </option>
                    );
                  })}
                </SelectCondition>
              </ConnectionBody>
            </>
          )}
          {node.node.type === "delay" && (
            <>
              <DelayHeader>Delay inteligente</DelayHeader>
              <DelayBody>
                <Options>
                  <InputTimeDelay
                    type="number"
                    value={delayTime}
                    onChange={(e) => setDelayTime(e.target.value)}
                  />
                  <SelectElement
                    onChange={setDelayFormat}
                    classNamePrefix="react-select"
                    options={[
                      { value: "minutos", label: "Minutos" },
                      { value: "horas", label: "Horas" },
                      { value: "dias", label: "Dias" },
                    ]}
                  />
                </Options>
              </DelayBody>
            </>
          )}
        </Modal>
      )}
      <Container>
        <CircleMenu
          startAngle={180}
          rotationAngle={180}
          itemSize={1}
          radius={6}
          menuToggleElement={<AddNodeBtn>+</AddNodeBtn>}
          rotationAngleInclusive={true}
          className="radial-menu"
        >
          <CircleMenuItem
            tooltip="Conteúdo"
            className="content"
            onClick={() => addSquareNode("square")}
          >
            <BiBookContent />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Botões"
            className="buttons"
            onClick={() => addSquareNode("button")}
          >
            <BsListUl />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Ação"
            className="action"
            onClick={() => addSquareNode("action")}
          >
            <BsLightningCharge />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Condição"
            className="condition"
            onClick={() => addSquareNode("condition")}
          >
            <TbArrowFork />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Conexão de Fluxo"
            className="connection"
            onClick={() => addSquareNode("connection")}
          >
            <BsArrowsAngleContract />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Randomizador"
            className="random"
            onClick={() => addSquareNode("random")}
          >
            <BsArrowsAngleExpand />
          </CircleMenuItem>
          <CircleMenuItem
            tooltip="Delay Inteligente"
            className="delay"
            onClick={() => addSquareNode("delay")}
          >
            <AiOutlineClockCircle />
          </CircleMenuItem>
        </CircleMenu>

        <ReactFlow
          nodeTypes={NODE_TYPES}
          edgeTypes={edgeTypes}
          nodes={nodes}
          edges={edges}
          onEdgesChange={onEdgesChanges}
          onConnect={onConnect}
          onNodesChange={onNodesChanges}
          connectionLineComponent={ConnectionLine}
          connectionLineStyle={ConnectionLine}
          connectionMode={ConnectionMode.Loose}
          defaultEdgeOptions={edgeOptions}
          style={{ backgroundColor: "#E8E8E8" }}
        >
          <Background gap={1} size={10} color="#f2f5f7" />
          <Controls />
        </ReactFlow>
      </Container>
    </>
  );
}

export default Flow;
