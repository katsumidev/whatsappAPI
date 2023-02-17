import { NodeResizer } from '@reactflow/node-resizer';
import React from 'react'
import { Handle, Position } from 'reactflow';
import '@reactflow/node-resizer/dist/style.css';
import {BsLightningChargeFill} from 'react-icons/bs';
import { Container, SquareContent, Header, ActionLogo, Text, Sub } from './styles';
import { useDispatch } from 'react-redux';
import { changeNode, undoChange } from '../../../redux/nodeSlice';

/*
  Position é um enum, facilita em que ponto do elemento se coloca os handles(As conexões)
*/

const ActionSquare = ({ selected, data, id }) => {

  const dispatch = useDispatch();

  if(selected) {
    dispatch(changeNode({id, type: 'action'}))
  } else {
    dispatch(undoChange())
  }




  return (
    <Container>
       <Header>
      <ActionLogo><BsLightningChargeFill size={32} fill="#FFF" /></ActionLogo>
      <Text>
      <p>ação</p>
      <Sub>executa ações quando chamado.</Sub>
      </Text>
      </Header>
      <SquareContent>
        <strong>Inscrição em Sequência</strong>
        {data.actionSelect === 'esquentaChip' ? (
          <p>Esquenta chip</p>
        ): (
          <p>8 horas do dia seguinte</p>
        )}
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