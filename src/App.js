// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import AllProduct from './Components/AllProducts'
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Products/*' element={<AllProduct/>}>
             <Route path=':id' element={<ProductDetails/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
