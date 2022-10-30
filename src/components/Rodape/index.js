import {Container, Redes, Info, Contatos, Title} from './style';
import {FaTiktok, FaFacebookF, FaTwitter, FaInstagram, FaYoutube,} from 'react-icons/fa';

const socialNetworkIcons = [<FaFacebookF/>, <FaTwitter/>, <FaInstagram/>, <FaTiktok/>, <FaYoutube/>];

export const Rodape = () => {
    return(
        <Container>
            <Redes>
                <Title>Redes Sociais</Title>
                <div>
                    {socialNetworkIcons.map((item) => item)}
                </div>
            </Redes>
            <Info>
                <Title>Informações</Title>
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
                <Title>Contatos</Title>
                <p>Segunda a Sextas das 8:00 as 18:00</p>
                <p>suporte@email.com.br</p>
                <p>(12)3456-7890</p>
            </Contatos>
        </Container>
    )
}