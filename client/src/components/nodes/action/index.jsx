import { NodeResizer } from '@reactflow/node-resizer';
import React from 'react'
import { Handle, Position } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';
import {BsLightningChargeFill} from 'react-icons/bs';
import { Container, H1, SquareContent } from './styles';
import { useDispatch } from 'react-redux';
import { changeNode, undoChange } from '../../../redux/nodeSlice';

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ActionSquare = ({ selected, data }) => {

  const dispatch = useDispatch();

  if(selected) {
    dispatch(changeNode({data, type: 'action'}))
  } else {
    dispatch(undoChange())
  }

  return (
    <Container>
      <H1><BsLightningChargeFill/>Ação</H1>
      <SquareContent>
        <strong>Inscrição em Sequência</strong>
        {data.registration === 'esquentaChip' ? (
          <p>Esquenta chip</p>
        ): <p>8 Horas do dia seguinte</p>}
      </SquareContent>
      <NodeResizer 
      minHeight={200}
      minWidth={200}
      isVisible={selected}
      lineClassName=''
      handleClassName=''
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

export default ActionSquare