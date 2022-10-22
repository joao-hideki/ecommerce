import { Carrosel } from '../../components/Carrosel/index';

import {camisetas} from '../../utils/camisetas';
import { bermudas } from '../../utils/bermudas';
import { calcas } from '../../utils/calcas';
import { moletons } from '../../utils/moletons';
import {Container} from './style';
import {GridItem} from '../../components/GridItem/index';


export const Home = () => {
    //let categorias = ['Bermudas', 'Calças', 'Camisetas', 'Moletons'];
    return(
        <Container>
            <Carrosel categoria = 'Camisetas' item={camisetas} slug='camisetas'/>
            <Carrosel categoria = 'Bermudas' item={bermudas} slug='bermudas'/>
            <Carrosel categoria = 'Calças' item={calcas} slug='calcas'/> 
            <Carrosel categoria = 'Moletons' item={moletons} slug='moletons' none/> 
        </Container>
    )
}