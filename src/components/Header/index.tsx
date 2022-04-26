import logoImg from '../../assets/logo.png'
import { Conteiner, Content, ContentButtons } from './style'

interface propsModal {
    openModal: () => void
}

export function Header({openModal} : propsModal) {

    return (
        <Conteiner>
            <Content>
                <img src={logoImg} id="logo" alt="My Money " />                
                <ContentButtons>                    
                    <button onClick={openModal} >Nova categoria </button> 
                    <button >Sair</button> 
                </ContentButtons>
            </Content>
        </Conteiner>

    )
}