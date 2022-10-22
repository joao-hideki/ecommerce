import {Navbar, Menu, Logo, Sacola} from './style';
import menu from '../../Assets/Images/menu.png';
import sacola from '../../Assets/Images/shopping-bag.png';
import { Link } from 'react-router-dom';



export const Header = (props) => {
    return(
        <Navbar>
            <Menu src={menu}/>
            <Link to='/'>
            <Logo src='https://cdn.shopify.com/s/files/1/0594/7847/4931/files/Logo_Header-1_300x.png?v=1635274856s'/>
            </Link>
            <Sacola src={sacola}/>
        </Navbar>
    );
}