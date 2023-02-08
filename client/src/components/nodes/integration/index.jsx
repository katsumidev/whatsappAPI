import { NodeResizer } from '@reactflow/node-resizer';
import React from 'react'
import { Handle, Position } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';
import {BsGraphUp} from 'react-icons/bs'


/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const IntegrationSquare = ({ selected }) => {
  return (
    <div className='rounded-2xl shadow-lg bg-transparent w-full h-full min-w-[300px] min-h-[150px]'>
      <h1 className='bg-green-400 rounded-t'><BsGraphUp/>Integração</h1>

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
    </div>
  )
}

export default IntegrationSquare;