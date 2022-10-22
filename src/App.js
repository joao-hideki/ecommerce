import { Home } from './pages/Home/index';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/index';
import {Rodape} from './components/Rodape/index'; 
import { Categories } from './pages/Categories/index';


const App = () => {
  return(
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/categoria/:slug' element={<Categories/> }/>
      </Routes>   
      <Rodape/>
    </div>
  );
}

export default App;



