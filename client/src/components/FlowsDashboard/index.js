import { useCallback, useEffect, useState } from 'react';
import {ButtonDelete, ButtonsContainer, ButtonUpdate, ButtonView, Container, CreateButton, Itens, Label} from './styles'
import {createFlow, deleteFlow, getFlows, updateFlow} from '../../services/api'
import { Link } from 'react-router-dom';

function FlowsDashBoard() {
  const [flows, setFlows] = useState([]);
  const [selectedFlowIndex, setSelectedFlowIndex] = useState(null);
  const [newFlowName, setNewFlowName] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [createFlowName, setCreateFlowName] = useState('')

  flows.map((fl) => {
    console.log(`id: ${fl._id} nome: ${fl.name}`)
  })

  const userToken = 'mapas'

  useEffect(() => {
    const findFlows = async () => {
      const {data} = await getFlows({userToken: 'mapas'})
      setFlows(data)
    }
    findFlows()
  }, [formSubmitted])

  const handleEditNameFlow = useCallback(async (e) => {
    e.preventDefault();
    const selectedFlow = flows[selectedFlowIndex];
    await updateFlow({
      nameFlow: selectedFlow.name,
      newName: newFlowName
    });
    setSelectedFlowIndex(null);
    setNewFlowName('');
    setFormSubmitted(true)
  }, [flows, newFlowName, selectedFlowIndex]);

  const handleDeleteFlow = useCallback(async (flowId) => {
    await deleteFlow({
        userToken: 'mapas',
        nameFlow: 'esquenta chip2',
        flowId:  flowId
    }).then(()=> console.log('apagado'))
  }, [flows])

  const handleCreateFlow = useCallback(async (e) => {
    e.preventDefault();
    await createFlow({
        name: createFlowName,
        execution: 20,
        ctr: 20,
        userToken: 'mapas'
    })
  }, [createFlowName])

  return (
    <>
        <CreateButton onClick={(e) => setShowForm(true)}>
            + Criar fluxo
        </CreateButton>
        {showForm && (
            <form onSubmit={(e) => handleCreateFlow(e)}>
                <input type='text' 
                    onChange={(e) => setCreateFlowName(e.target.value)} 
                    value={createFlowName}
                    placeholder='Insira o numero do fluxo'
                />
                <button>Criar</button>
            </form>
        )}
    <Container>
        
      <Label>
        <p style={{paddingRight: '30px'}}>Nome</p>
        <p style={{paddingRight: '20px'}}>Execuções</p>
        <p style={{paddingRight: '20px'}}>crt, %</p>
        <p style={{paddingRight: '20px'}}>Criado em</p>
      </Label>
      {flows.map((flow, index) => {
        return (
          <div key={index}>
            <Itens key={index}>
              <p style={{paddingRight: '30px'}}>{flow.name}</p> 
              <p style={{paddingRight: '20px'}}>{flow.execution}</p> 
              <p style={{paddingRight: '20px'}}>{flow.ctr}</p> 
              <p style={{paddingRight: '20px'}}>{flow.createdAt}</p>
              <ButtonsContainer>
                <Link to={`/${userToken}/constructor/${flow.name}`}>
                <ButtonView>👀</ButtonView>
                </Link>
                <ButtonUpdate onClick={() => {
                  setSelectedFlowIndex(index);
                  setNewFlowName(flow.name);
                }}>
                    ✏️
                </ButtonUpdate>
                <ButtonDelete onClick={() => handleDeleteFlow(flow._id)}>
                    🗑️
                </ButtonDelete>
              </ButtonsContainer>
            </Itens>
            {selectedFlowIndex === index && (
              <form onSubmit={(e) => handleEditNameFlow(e)}>
                <label>Insira o nome do Fluxo</label>
                <input 
                  type='text' 
                  onChange={(e) => setNewFlowName(e.target.value)} 
                  value={newFlowName}
                />
                <button type='submit'>Renomear robô</button>
              </form>
            )}
          </div>
        )
      })}
    </Container>
    </>
  );
}

export default FlowsDashBoard;
