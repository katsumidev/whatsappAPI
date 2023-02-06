import { Container, ItensMenu} from './styles';
import { Link, useParams } from 'react-router-dom'




function Menu() {
    const {userIns} = useParams();

    return(
        <>
        <Container>
            <ItensMenu>
            <p><Link className='link' to={`/${userIns}/settings`}>WhatsApp</Link></p>
            <p><Link className='link' to={`/${userIns}/settings/customFields`}>Campos personalizados</Link></p>
            <p><Link className='link' to={`/${userIns}/settings/tags`}>Etiquetas</Link></p>
            <p><Link className='link' to={`/${userIns}/settings/fastReplies`}>Respostas rápidas</Link></p>
            <p><Link className='link' to={`/${userIns}/settings/managers`}>Administradores</Link></p>
            <p><Link className='link' to={`/${userIns}/settings/defaultValues`}>Boas vindas, Respostas Padrão e Erro</Link></p>
            <p><Link className='link' to={`/${userIns}/settings/company`}>Companhia</Link></p>
            <p><Link className='link' to={`/${userIns}/settings/logs`}>Logs</Link></p>
            </ItensMenu>
            <hr className='menu_line' />
        </Container>
        </>
    );
}

export default Menu;