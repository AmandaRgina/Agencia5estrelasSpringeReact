import { useEffect, useState, useRef } from 'react';
import './MenuScroll.css';
import React from 'react'


function MenuScroll() {
  const [data, setData] = useState([]);
  const carousel = useRef<any>();
  

  useEffect(() => {
    fetch('http://localhost:3000/lugarespopulares.json')
      .then((response) => response.json())
      .then(setData).then(console.log);
  }, []);

  const handleLeftClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null;

  return (

    <div className="scroll">
       <h1 className="pt-5 pb-3">Lugares Populares </h1>
            <div className="buttons">
           
        <button onClick={handleLeftClick}>
          <img src="static\images\right-arrow.png" alt="Scroll Left" />
        </button>
        <button onClick={handleRightClick}>
          <img src="static\images\right-arrow.png" alt="Scroll Right" />
        </button>
      </div>

      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image } = item;
          return (
            <div className="item" key={id}>
    
             
                  <img src={image} alt={name} />
             
                 <span className="price shadow">U$ {price}</span>
         
          
                  
            
            </div>
          );
        })}
      </div>

    </div>
  );
}

export default MenuScroll;