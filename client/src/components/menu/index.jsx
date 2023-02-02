import { useState } from 'react';
import { Container, ItensMenu, RightContent, ServerContainer, ServerStatus } from './styles';
import { Link } from 'react-router-dom'
import {GrCircleAlert} from 'react-icons/gr';
import WhatsApp from '../whatsapp';



function Menu() {

    return(
        <>
        <Container>
            <ItensMenu>
            <p><Link className='link' to="/:userIns/settings">WhatsApp</Link></p>
            <p><Link className='link'>Etiquetas</Link></p>
            <p><Link className='link'>Respostas rápidas</Link></p>
            <p><Link className='link'>Administradores</Link></p>
            <p><Link className='link'>Boas vindas, Respostas Padrão e Erro</Link></p>
            <p><Link className='link'>Companhia</Link></p>
            <p><Link className='link'>Logs</Link></p>
            </ItensMenu>
            <hr className='menu_line' />
        </Container>
        </>
    );
}

export default Menu;