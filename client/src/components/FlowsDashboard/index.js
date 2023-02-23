import { useEffect, useState } from 'react';
import {Container, Itens} from './styles'
import {getFlows} from '../../services/api'

function FlowsDashBoard() {
    const [flows, setFlows] = useState([]);

    useEffect(() => {
        const findFlows = async () => {
            const {data} = await getFlows({userToken: 'mapas'})
            setFlows(data)
        }
        findFlows()
    }, [])
    
    flows.map((flow, index) => {
        console.log(`index ${index}: ${JSON.stringify(flow.name)}`)
    })

    return (
        <Container>
            {flows.map((flow, index) => {
                return (
                    <Itens key={index}>Nome: {flow.name} execution: {flow.excution} ctr: {flow.ctr} createdAt: {flow.createdAt}</Itens>
                )
            })}
        </Container>
    );
}

export default FlowsDashBoard;