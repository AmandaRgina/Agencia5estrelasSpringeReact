import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Space from './components/Body/Space';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import ListarClientes from './components/Clientes/ListarClientes';
import ListarDestinos from './components/Destinos/ListarDestinos';
import ListarPromocoes from './components/Promocoes/ListarPromocoes';


function App() {
  return (
    <>
  <Navbar />

    <BrowserRouter>
     
    
      <Routes>
      <Route path="/" element={ <Space/>} />
        <Route path="/clientes" element={<ListarClientes/>} />
        <Route path="/destinos" element={<ListarDestinos/>} />
        <Route path="/promocoes" element={<ListarPromocoes/>} />
      </Routes>
    </BrowserRouter>  
    <Footer/>
    </>
  );
}

export default App;
