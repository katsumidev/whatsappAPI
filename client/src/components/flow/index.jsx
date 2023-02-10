import React, { useCallback, useState } from 'react';
import ReactFlow,
{
  Background,
  ConnectionMode, 
  Controls,  
  addEdge, 
  useEdgesState, 
  useNodesState, 
  useOnSelectionChange
} from 'reactflow';
import 'reactflow/dist/style.css';
import ContetntSquare from '../nodes/content';
import DefaultEdge from '../edges/Default-edge';
import * as Toolbar from '@radix-ui/react-toolbar';
import ButtonSquare from '../nodes/buttons';
import ConditionSquare from '../nodes/conditions';
import ConnectionSquare from '../nodes/connection';
import RandomSquare from '../nodes/random';
import DelaySquare from '../nodes/delay';
import IntegrationSquare from '../nodes/integration';
import {AiFillAlert, AiOutlineArrowsAlt, AiOutlineClockCircle} from 'react-icons/ai'
import {BiBookContent} from 'react-icons/bi'
import {BsLightningChargeFill, BsArrowLeftRight, BsArrowsAngleContract, BsGraphUp} from 'react-icons/bs'
import ActionSquare from '../nodes/action';
import { ActionBody, ActionHeader, ButtonBody, ButtonHeader, ButtonTextArea, ConditionBody, ConditionHeader, ConnectionBody, ConnectionHeader, Container, ContentBody, ContentHeader, DelayHeader, DelayRange, InputRange, InputRangeRandom, InputTimeDelay, Modal, RandomHeader } from './styles';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
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
}

const EDGE_TYPES = {
  default: DefaultEdge,
}

// data = transporta informações da aplicação até os Nodes
const INITIAL_NODES = [
  {
    id: crypto.randomUUID(),
    type: 'button',
    position: {
      x: 200,
      y: 400,
    },
    data: {}
  },
  {
    id: crypto.randomUUID(),
    type: 'square',
    position: {
      x: 1000,
      y: 400,
    },
    data: {
      conteudo: "oi"
    },
  },
]

const ConditionSelectList = [
  'etiqueta',
  'Dia da semana ao passar por aqui',
  'Horário de atendimento',
  'Hora ao passar por aqui',
  'Nome completo',
  'Primeiro nome',
  'Sobrenome',
  'DDD',
  'Telefone'
]

const ConnectionSelectList = [
  'Quer Reembolsar / trocar',
  'Saudação',
  'Quer reagendar',
  'Quer cancelar',
  'Esquenta chip 1',
  'Entregador está a caminho',
  'Retorno',
  'Não saiu para rota',
  'Pedidos Agendados'
]

function Flow() {
  const [edges, setEdges, onEdgesChanges] = useEdgesState([]);
  const [nodes, setNodes, onNodesChanges] = useNodesState(INITIAL_NODES);
  const [activeTyping, setActiveTyping] = useState()
  const [randomRangeOne, setRandomRangeOne] = useState([])
  const [randomRangeTwo, setRandomRangeTwo] = useState([])
  const [randomRangeThree, setRandomRangeThree] = useState([])
  const [randomRangeFour, setRandomRangeFour] = useState([])
  const [randomRangeFIve, setRandomRangeFive] = useState([])
  const [actionSelect, setActionSelect] = useState('esquentaChip');
  const [buttonTextArea, setButtonTextArea] = useState('');
  const [conditionSelect, setConditionSelect] = useState(ConditionSelectList);
  const [connectionSelect, setConnectionSelect] = useState(ConnectionSelectList);
  const [conditionValue, setConditionValue] = useState()
  const [connectionValue, setConnectionValue] = useState('')
  const [delayTime, setDelayTime] = useState();
  const [delayFormat, setDelayFormat] = useState();
  const {userIns, flowId} = useParams();
  
  const node = useSelector(state => state.node);
  console.log(node)
  const [rangeValue, setRangeValue] = useState(3)

  const onConnect = useCallback((connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, []);

  const dataRange = {
    randomRangeOne,
    randomRangeTwo,
    randomRangeThree,
    randomRangeFour,
    randomRangeFIve,
  }

  console.log(dataRange);

  function addSquareNode(type) {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: type,
        position: {
          x: 750,
          y: 350,
        },
        data: {
          range: rangeValue,
          randomRangeOne: randomRangeOne,
          randomRangeTwo: randomRangeTwo,
          randomRangeThree: randomRangeThree,
          randomRangeFour: randomRangeFour,
          randomRangeFive: randomRangeFIve,
          registration: actionSelect,
          textArea: buttonTextArea,
          condtionValue: conditionValue,
          connection: connectionValue,
          delayTime: delayTime,
          delayFormat: delayFormat
        },
      }
    ])
  }
 
  return (
    <>
      <Container>
        
        <ReactFlow 
        nodeTypes={NODE_TYPES}
        edgeTypes={EDGE_TYPES}
        nodes={nodes}
        edges={edges}
        onEdgesChange={onEdgesChanges}
        onConnect={onConnect}
        onNodesChange={onNodesChanges}
        connectionMode={ConnectionMode.Loose}
        defaultEdgeOptions={{
          type: 'default'
        }}
        >
          <Background
            gap={1}
            size={10}
            color='#f2f5f7'
          />
          <Controls />
        </ReactFlow>
        <Toolbar.Root style={{ position: 'fixed', top: '80px' }}
        className='fixed flex top-20 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-lg border border-zinc-300 px-8 h-24 w-4/6 overflow-hidden'>
          <Toolbar.Button
          className='h-14 w-20 mr-6  rounded-lg bg-green-300  mt-4'
          onClick={() => addSquareNode('square')}
          >
            Conteúdo 
            <BiBookContent className='ml-8'/>
          </Toolbar.Button>
          <Toolbar.Button
          className='h-14 w-20 mb-2 mr-6 bg-green-300 mt-4 rounded-lg'
          onClick={() => addSquareNode('button')}
          >
            Botões
            <AiFillAlert className='ml-7'/>
          </Toolbar.Button>
          <Toolbar.Button
          className='h-14 w-20 mr-6 bg-green-300 mt-4 rounded-lg houver:mt-4'
          onClick={() => addSquareNode('action')}
          >
            Ação
            <BsLightningChargeFill className='ml-7'/>
          </Toolbar.Button>
          <Toolbar.Button
          className='h-14 w-20 mr-6 bg-green-300 mt-4 rounded-lg houver:mt-4'
          onClick={() => addSquareNode('condition')}
          >
            <p>Condição</p>
            <BsArrowLeftRight className='ml-7'/>
          </Toolbar.Button>
          <Toolbar.Button
          className='h-14 w-20 mr-6 bg-green-300 mt-4 rounded-lg houver:mt-4'
          onClick={() => addSquareNode('connection')}
          >
            Conexão
            <BsArrowsAngleContract className='ml-7'/>
            
          </Toolbar.Button>
          <Toolbar.Button
          className='h-14 w-28 mr-6 bg-green-300 mt-4 rounded-lg houver:mt-4'
          onClick={() => addSquareNode('random')}
          >
            Randomização
            <AiOutlineArrowsAlt className='ml-11'/>
          </Toolbar.Button>
          <Toolbar.Button
          className='h-14 w-20 mr-6 bg-green-300 mt-4 rounded-lg houver:mt-4'
          onClick={() => addSquareNode('delay')}
          >
            Delay
            <AiOutlineClockCircle className='ml-8'/>
          </Toolbar.Button>
        </Toolbar.Root>
      </Container>
      {node.isClicked && (
        <Modal>
          {node.node.type === 'content' && (
            <>
              <ContentHeader>Conteúdo</ContentHeader>
              <ContentBody>
                <DelayRange>
                  <InputRange type='range' max={6} value={rangeValue} onChange={(e) => setRangeValue(e.target.value)}/>
                  <strong>{rangeValue}seg</strong><br />
                  <label>
                    <input type="checkbox" value={activeTyping} onChange={(e) => setActiveTyping(e.target.value)}/>
                    <strong>Ativar Digitando</strong>
                  </label>
                </DelayRange>
              </ContentBody>
            </>
          )}
          {node.node.type === 'random' && (
            <>
              <RandomHeader>
                Randomizador
              </RandomHeader>
              <strong>1</strong>
              <InputRangeRandom type='range' 
              value={randomRangeOne} 
              onChange={(e) => setRandomRangeOne(e.target.value)}
              />
              <strong>2</strong>
              <InputRangeRandom type='range' 
              value={randomRangeTwo} 
              onChange={(e) => setRandomRangeTwo(e.target.value)}
              />
              <strong>3</strong>
              <InputRangeRandom type='range' 
              value={randomRangeThree} 
              onChange={(e) => setRandomRangeThree(e.target.value)}
              />
              <strong>4</strong>
              <InputRangeRandom type='range' 
              value={randomRangeFour} 
              onChange={(e) => setRandomRangeFour(e.target.value)}
              />
              <strong>5</strong>
              <InputRangeRandom type='range' 
              value={randomRangeFIve} 
              onChange={(e) => setRandomRangeFive(e.target.value)}
              />
            </>
          )}
          {node.node.type === 'action' && (
            <>
              <ActionHeader>
                Ação
              </ActionHeader>
              <ActionBody>
                <label>Inscrição em Sequência</label>
                <select name="registration" value={actionSelect}
                 onChange={(e) => setActionSelect(e.target.value)}
                >
                  <option value="esquentaChip">Esquenta Chip</option>
                  <option value="8hours">8 Horas do dia seguinte</option>
                </select>
              </ActionBody>
            </>
          )}
          {node.node.type === 'button' && (
            <>
              <ButtonHeader>
                Botões
              </ButtonHeader>
              <ButtonBody>
                <ButtonTextArea value={buttonTextArea} onChange={(e) => setButtonTextArea(e.target.value)}/>
              </ButtonBody>
            </>
          )}
          {node.node.type === 'condition' && (
            <>
              <ConditionHeader>
                Condição
              </ConditionHeader>
              <ConditionBody>
                <select name="" id="" 
                onChange={(e) => setConditionValue(e.target.value)}
                >
                  {conditionSelect.map((cond, index) => {
                    return (
                      <option key={index} value={cond} 
                      >
                        {cond}
                      </option>
                    )
                  })}
                </select>
              </ConditionBody>
            </>
          )}
          {node.node.type === 'connection' && (
            <>
              <ConnectionHeader>
                Conexão de fluxo
              </ConnectionHeader>
              <ConnectionBody>
                <select name="" id="" onChange={(e) => setConnectionValue(e.target.value)}>
                  {connectionSelect.map((conn, index) => {
                    return (
                      <option key={index} value={conn} 
                      >
                        {conn}
                      </option>
                    )
                  })}
                </select>
              </ConnectionBody>
            </>
          )}
          {node.node.type === 'delay' && (
            <>
              <DelayHeader>
                Delay inteligente
              </DelayHeader>
              <InputTimeDelay type='number' value={delayTime} onChange={(e) => setDelayTime(e.target.value)}/>
              <select name="" id="" value={delayFormat} onChange={(e) => setDelayFormat(e.target.value)}>
                <option value="minutos">Minutos</option>
                <option value="horas">Horas</option>
                <option value="dias">Dias</option>
              </select>
            </>
          )}
        </Modal>
      )}
      
    </>
  );
}

export default Flow;