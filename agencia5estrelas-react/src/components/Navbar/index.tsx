import React from 'react';
import { useRef, useState } from "react";
import { useOutsideClick } from "../useOutsideClick";
import './styles.css';

function Navbar(){

  const dropDownRef = useRef(null);
  const [isActive, setIsActive] = useOutsideClick(dropDownRef, false);
  const onClick = () => setIsActive(!isActive);

  console.log(isActive);

return(
  

<nav className="navbar navbar-expand-lg navbar-dark ps-5 shadow-lg" style={{backgroundColor: "rgb(2, 13, 23)", listStyle: "none", height:120}}>
  <div className="container-fluid pb-1">
    <a className="navbar-brand" href="#">5Estrelas</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-4">
        <li className="nav-item ">
          <a className="nav-link active ms-1 " aria-current="page" href="/">Home</a>
        </li>
       <li className="nav-item dropdown" 
      
        >
          <a className="nav-link dropdown-toggle text-white"
          onClick={onClick}
          href="/destinos"
          id="navbarDropdownMenuLink" 
          role="button" 
          data-bs-toggle="dropdown" 
          aria-expanded="false">
            Destinos
          </a>
          <nav className={`menu ${isActive ? "active" : "inactive"}`} ref={dropDownRef}>
          <ul  className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
           
 
            <li><a className="dropdown-item text-white" href="#/action-1">Action</a></li>
            <li><a className="dropdown-item text-white" href="#/action-2">Another action</a></li>
            <li><a className="dropdown-item text-white" href="#/action-3">Something else here</a></li>
          
          </ul>
          </nav>
        </li>

        <li className="nav-item">
          <a className="nav-link ms-1 text-white" href="/clientes">Clientes</a>
        </li>

        <li className="nav-item">
          <a className="nav-link ms-1 text-white" href="/promocoes">Promoções</a>
        </li>

        <li className="nav-item">
          <a className="nav-link ms-1 text-white" href="/">Sobre Nós</a>
        </li>
        
        
      </ul>
    </div>
    <div className="d-flex mb-1 pe-5">
    <li className="nav-item">
          <a className="nav-link text-white" href="/">Registre-se</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link text-white" href="/">Login</a>
        </li>
</div>
  </div>
</nav>



)


}

export default Navbar;