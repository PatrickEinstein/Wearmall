import logo from './logo.svg';
import './App.css';
import Homepage from './pages/Homepage/homepage';
import ShopPage from './pages/ShopPage/shop-page';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<ShopPage/>} />
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
