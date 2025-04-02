import { useState } from 'react'
import './App.css'
import NavBar from './component/NavBar'
import Innovacion from './component/innovacion'
import SobreNosotros from './component/sobreNosotros'
import Contacto from './component/contacto'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Innovacion />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/sobreOhTea' element={<SobreNosotros />} />
          <Route path='/contacto' element={<Contacto />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
