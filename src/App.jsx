import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './component/NavBar';
import Innovacion from './component/innovacion';
import SobreNosotros from './component/sobreNosotros';
import Contacto from './component/Contacto';
import Menu from './component/Menu';
import { CartContextProvider } from "./context/cartContext";
import ItemDetailContainer from './component/ItemDetailContainer'
import ItemListContainer from './component/ItemListContainer';
import CartContainer from "./component/CartContainer";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Innovacion />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sobreOhTea" element={<SobreNosotros />} />
          <Route path="/tienda" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/cart" element={<CartContainer />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider >

  );
}

export default App;
