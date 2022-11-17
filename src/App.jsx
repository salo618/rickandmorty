import React from 'react';
import './App.css';
import CharacterList from'./components/CharacterList';
import Logo from './assets/logo.png'

function App() {

  return <div className='bg-dark text-white'>
        <figure className='logo' >
				<img src={Logo} alt='Logo de Rick & Morty' />
			</figure>
        <CharacterList/>
        
      
    </div>   
  }

export default App;