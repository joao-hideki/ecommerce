import {Container} from './style';

export const GridItem = ({imagem, nome, preco}) => {
    return(
        <Container>
            <img src={imagem}/>
                <div>              
                    <span>{nome}</span>
                    <span>{preco}</span>
                </div>
        </Container>
    )
}