import { useState } from 'react';
import { Container, ItensMenu} from './styles';
import { Link } from 'react-router-dom'




function Menu() {

    return(
        <>
        <Container>
            <ItensMenu>
            <p><Link className='link' to="/:userIns/settings">WhatsApp</Link></p>
            <p><Link className='link' to="/:userIns/settings/customFields">Campos personalizados</Link></p>
            <p><Link className='link' to="/:userIns/settings/tags">Etiquetas</Link></p>
            <p><Link className='link' to="/:userIns/settings/fastReplies">Respostas rápidas</Link></p>
            <p><Link className='link' to="/:userIns/settings/managers">Administradores</Link></p>
            <p><Link className='link' to="/:userIns/settings/defaultValues">Boas vindas, Respostas Padrão e Erro</Link></p>
            <p><Link className='link'>Companhia</Link></p>
            <p><Link className='link'>Logs</Link></p>
            </ItensMenu>
            <hr className='menu_line' />
        </Container>
        </>
    );
}

export default Menu;