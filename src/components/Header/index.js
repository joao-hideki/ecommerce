import {Navbar, Menu, Logo, Sacola} from './style';
import menu from '../../Assets/Images/menu.png';
import sacola from '../../Assets/Images/shopping-bag.png';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo-overcome.png'



export const Header = (props) => {
    return(
        <Navbar>
            <Menu src={menu}/>
            <Link to='/'>
            <Logo src={logo}/>
            </Link>
            <Sacola src={sacola}/>
        </Navbar>
    );
}