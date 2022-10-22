import {Container, Redes, Info, Contatos} from './style';

export const Rodape = () => {
    return(
        <Container>
            <Redes>
                <h3>Redes Sociais</h3>
            </Redes>
            <Info>
                <h3>Informações</h3>
                <br/>
                <p>Seja nosso Revendedor</p>
                <p>Quem Somos</p>
                <p>Trabalhe Conosco</p>
                <p>Nossas Lojas</p>
                <p>Política de Troca e Devoluções</p>
                <p>Política de Privacidade</p>
                <p>Termos de Serviço</p>
                <p>Formas de Envio</p>
                <p>Política de Reembolso</p>
            </Info>
            <Contatos>
                <h3>Contatos</h3>
                <p>Segunda a Sextas das 8:00 as 18:00</p>
                <p>suporte@email.com</p>
                <p>(12)3456-7890</p>
            </Contatos>
        </Container>
    )
}