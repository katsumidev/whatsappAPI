import React, { useCallback } from 'react';
import ReactFlow,
{
  Background,
  ConnectionMode, 
  Controls,  
  addEdge, 
  useEdgesState, 
  useNodesState 
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
import { Container } from './styles';
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
    data: {}
  },
]

function Flow() {
  const [edges, setEdges, onEdgesChanges] = useEdgesState([]);
  const [nodes, setNodes, onNodesChanges] = useNodesState(INITIAL_NODES);

  const onConnect = useCallback((connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

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
        data: {}
      }
    ])
  }
 
  return (
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
        />
        <Controls />
      </ReactFlow>
      <Toolbar.Root style={{position: 'fixed', top: '80px' }}
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
        <Toolbar.Button
        className='h-14 w-20 mr-6 bg-green-300 mt-4 rounded-lg houver:mt-4'
        onClick={() => addSquareNode('integration')}
        >
          Integração
          <BsGraphUp className='ml-7'/>
        </Toolbar.Button>
      </Toolbar.Root>
      
    </Container>
  );
}

export default Flow;