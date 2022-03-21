import React, { useEffect, useState } from 'react';
import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  body {
    font-family: sans-serif;
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top:50px;
    
  }
  .listalugaresmain {
    width:100%vh;
    height:87vh;
    overflow-y: scroll;
    display: none;
    overflow-x: hidden;
    padding: 0px;
    display:flex;
    flex-flow: row wrap;
    list-style:none;
    margin:0px;
    padding-left:0px;
    scroll-behavior: smooth;
    padding-left:26px
   
    
  }
  .listalugares {
    background-color: white;
    
    
    height: 270px;
    width: 210px;
    border-radius: 16px;
    margin:10px;
    
    
   
  
   
  }
  #listalugares .imagem {
    --size: 75px;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
  
   
  }
  
  #sentinela {
    width: 100%;
    height: 5px;
    background-color: rgb(2, 13, 23);
  }

  .listalugaresmain::-webkit-scrollbar {
    display: none;
   
  }

  
`;

export default function Home() {
  const [followers, setFollowers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const perPage = 4;
    const ENDPOINT = 'https://api.github.com/users/omariosouto/followers';
  
    const URL = `${ENDPOINT}?per_page=${perPage}&page=${currentPage}&order=DESC`;
    fetch(URL)
    
      .then((response) => response.json())
      .then((newFollowers) => setFollowers((prevFollowers) => [...prevFollowers, ...newFollowers]))
  }, [currentPage]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        console.log('Sentinela appears!', currentPage + 1)
        setCurrentPage((currentValue) => currentValue + 1);
      }
    })
    intersectionObserver.observe(document.querySelector('#sentinela'));
    return () => intersectionObserver.disconnect();
  }, []);

  return (
    <main>
      <GlobalStyle />
      <ul className='listalugaresmain '>
        {followers.map(follower => (
          <li className= "listalugares" id="listalugares" key={follower.login}>
          
              <img className="imagem" src={`https://github.com/${follower.login}.png`} alt="" />
              <p>
                github.com/<strong>{follower.login}</strong>
              </p>
        
          </li>
        ))}
        <li id="sentinela"></li>
      </ul>
    </main>
  )
} 
      

