import {Container, Categoria,Item, Imagem, Info, Nome, Preco, All, LeftArrow, RightArrow} from './style';
import Arrow from '../../Assets/Images/LeftArrow.png';
import { useRef } from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {GridItem} from '../GridItem/index';

export const Carrosel = ({categoria, item, slug, none}) => {
    const carrosel = useRef(null);
    const [scrollRight, setScrollRight] = useState(true);    
    const handleScroll = (e) => {
        e.preventDefault();
        if(scrollRight){            
            carrosel.current.scrollLeft += carrosel.current.offsetWidth + 10;
            setScrollRight(!scrollRight);
        } else{            
            carrosel.current.scrollLeft -= carrosel.current.offsetWidth + 10;
            setScrollRight(!scrollRight);
        }
    }

    return(
        <>
            <Categoria>{categoria}</Categoria>
            <Container ref={carrosel}> 
                {item.map((item)=>{
                    const{id, nome, imagem, preco} = item;
                    return(
                        <GridItem 
                            key={id} 
                            nome={nome} 
                            preco={preco}
                            imagem={imagem}
                        />                       
                    )
                })} 
                {scrollRight &&
                    <>
                        <LeftArrow disabled>
                            <img src={Arrow}/>
                        </LeftArrow>  
                        <RightArrow>
                            <img src={Arrow} onClick={handleScroll}/>
                        </RightArrow>
                    </>
                }
                {!scrollRight &&
                    <>
                        <LeftArrow>
                            <img src={Arrow} onClick={handleScroll}/>
                        </LeftArrow>  
                        <RightArrow disabled>
                            <img src={Arrow}/>
                        </RightArrow>
                        
                    </>
                }            
            </Container>
            <Link to={`/categoria/${slug}`}><All>VER TUDO</All></Link>
            {none ? null : <hr width={950}/>}            
        </>
    );
}


/*
<Item key={id}>
    <Imagem src={imagem}/>  
        <Info>              
            <Nome>{nome}</Nome>
            <Preco>{preco}</Preco>
        </Info>             
</Item>
*/

        
