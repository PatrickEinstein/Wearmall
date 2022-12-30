import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/ShopPage/shop-page';
import { BrowserRouter, Routes, Route, Link, Switch } from 'react-router-dom'
import { ReactComponent as Logo} from './assets/assets.svg';
import './components/header/header.css';
import SignInSignUp from './pages/sing-in-and-sign-up/sign-in-and-sign-up';


function App() {
  return (

    <BrowserRouter>
    <div className='header'>
      <div className='logo-container'>
        <Link to="/"> <Logo className='logo' /> </Link>
        </div>
        
        <div className='links'>
            <Link to="/shop" className='links0'> SHOP </Link>
            
            <Link to="/contact" className='links0'> CONTACT </Link>
        </div>

        
    </div>



        
      <Routes>
          <Route exact path='/' element={<Homepage />} />
        <Route exact path='/shop' element={<ShopPage />} />
        <Route exact path='/signin' element={<SignInSignUp/>} />
         </Routes>
      </BrowserRouter>
        
          
        
     
  
  );
}

export default App;
