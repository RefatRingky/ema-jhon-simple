import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Inventory from './component/Inventory/Inventory';
import Oders from './component/Oders/Oders';
import Shop from './component/Shop/Shop';

function App() {
  return (
    <div >
       <Header></Header>
       <Routes>
         <Route path='/' element={<Shop></Shop>}></Route>
         <Route path='/shop' element={<Shop></Shop>}></Route>
         <Route path='/orders' element={<Oders></Oders>}></Route>
         <Route path='/inventory' element={<Inventory></Inventory>}></Route>
       </Routes>
    
    </div>
  );
}

export default App;
