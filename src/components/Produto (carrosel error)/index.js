import { Container, Header, Categoria, Imagem, Item, Titulo, Preco, Arrow, ArrowLeft, ArrowRight, VerTudo, Info} from "./style";
import DoubleArrow from '../../Assets/Images/DoubleArrow.png';
import LeftArrow from '../../Assets/Images/LeftArrow.png';
import { useRef } from "react";



export const Produto = () => {

    const carrosel = useRef(null);

    const handleLeftClick = (e) =>{
        e.preventDefault();
        console.log(carrosel.current.offsetWidth);
        carrosel.current.scrollLeft -= carrosel.current.offsetWidth;

    };

    const handleRightClick = (e) =>{
        e.preventDefault();
        carrosel.current.scrollLeft += carrosel.current.offsetWidth;

    };

    return(
        <>
            <Header>
                <Categoria>Camisetas</Categoria>                          
            </Header>
            <Container ref={carrosel}>                                 
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher "</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                <Item>
                    <Imagem src="https://cdn.shopify.com/s/files/1/0594/7847/4931/products/34222-0_c35e40ed-0d87-4f9b-a432-bff32a04bd91.jpg?v=1663790470"/>
                    <Info>
                        <Titulo>Camiseta Thrasher</Titulo>
                        <Preco>R$ 49,99</Preco>
                    </Info>
                </Item>
                

                <ArrowRight onClick={handleRightClick} >
                    <img src={LeftArrow}/>
                </ArrowRight> 
                <ArrowLeft onClick={handleLeftClick} >
                    <img src={LeftArrow}/>
                </ArrowLeft>        
            </Container>
            <VerTudo>
                <p>VER TUDO</p>
            </VerTudo>
                
        </>

    );
}