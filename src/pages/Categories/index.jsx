import { useParams } from "react-router-dom";
import {Container, Grid} from './style';

import { camisetas } from "../../utils/camisetas";
import { bermudas } from "../../utils/bermudas";
import { moletons } from "../../utils/moletons";
import { calcas } from "../../utils/calcas";
import { useEffect, useState } from "react";
import { GridItem } from "../../components/GridItem/index";
import { Categoria } from "../../components/Carrosel/style";

export const Categories = () => {
    const params = useParams();
    const [data, setData] = useState([]);
    const[categorie, setCategorie] = useState('');
    
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
        switch(params.slug){
            case 'camisetas':
                setData(camisetas);
                setCategorie('Camisetas');
                break;
            case 'bermudas':
                setData(bermudas);
                setCategorie('Bermudas');
                break;
            case 'calcas':
                setData(calcas);
                setCategorie('Calças');
                break;
            case 'moletons':
                setData(moletons);
                setCategorie('Moletons');
                break; 
        }  
    }, []);

   


    return(
        <Container>
            <Grid>
                {data.map((item) => {
                    return(
                        <GridItem
                            key={item.id}
                            imagem={item.imagem}
                            nome={item.nome}
                            preco={item.preco}
                        />
                    )
                })} 
            </Grid>         
                    
        </Container>
    );
    
}