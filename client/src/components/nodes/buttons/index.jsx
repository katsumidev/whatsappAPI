import { NodeResizer } from '@reactflow/node-resizer';
import React from 'react'
import { Handle, Position } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';
import {AiFillAlert} from 'react-icons/ai';
import { Container, H1 } from './styles';

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ButtonSquare = ({ selected }) => {
  return (
    <Container>
      <H1><AiFillAlert/>Botões</H1>
      <div className='text-center mt-6'>
        <p><strong>Normal de 3 em 3</strong></p>
        <p className='text-green-600'>Texto da pergunta</p>
        <hr className='bg-zinc-500 max-w-full'/>
      </div>
      <NodeResizer 
      minHeight={200}
      minWidth={200}
      isVisible={selected}
      lineClassName='border-blue-400'
      handleClassName='h-3 w-3 bg-white border-2 rounded border-blue-400'
      />
        <Handle
         id='right'
         type='source'
         position={Position.Right}
         className='-right-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />
         
        <Handle
         id='left' 
         type='source' 
         position={Position.Left}
         className='-left-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />

        <Handle
         id='top'
         type='source'
         position={Position.Top}
         className='-top-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />
         
        <Handle
         id='bootom' 
         type='source' 
         position={Position.Bottom}
         className='-bottom-5 w-3 h-3 border-2 bg-transparent bg-blue-400/80'
        />
    </Container>
  )
}

export default ButtonSquare