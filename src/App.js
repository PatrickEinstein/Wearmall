import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/ShopPage/shop-page';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom';
import Header from './components/header/header';
import { ReactComponent as Logo} from './assets/assets.svg';


function App() {
  return (

    <BrowserRouter>
    <div className='header'>
      <div className='logo-container'>
        <Link to="/"> <Logo className='logo' /> </Link>
        </div>
        
        <div>
            <Link to="/shop"> SHOP </Link>
            
            <Link to="/contact"> CONTACT </Link>
        </div>

        
    </div>



        
      <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<ShopPage/>} />
         </Routes>
      </BrowserRouter>
        
          
        
     
  
  );
}

export default App;
