import React from "react";
import{useEffect, useState} from 'react';
import Character from "./Character";


function NavPage(props){
    return(
        <header className="d-flex justify-content-between align-items-center">
            <button className="btn btn-dark btn-sm"
            onClick={()=> props.setPage(props.page - 1)} disabled={props.page<2}>
                Page {props.page - 1}
            </button>
            <h4 className="radioactivo">Page {props.page}</h4>
            <button className="btn btn-dark btn-sm"
            onClick={()=> props.setPage(props.page + 1)} disabled={props.page>41}>
                Page {props.page + 1}
            </button>
        </header>
    ) 
}

function CharacterList(){
    const [characters, setCharacters]=useState([])
    const [loading, setLoading]= useState(true)
    const [page, setPage]=useState(1)

  useEffect(()=>{
      async function fetchData() {
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
        const data = await response.json()
        setLoading(false)
        setCharacters(data.results)
      }
      fetchData()
  },[page])

  

    return(
        <div className="container">
            <NavPage page={page} setPage={setPage}/>
            <div className='lista-personajes'>
				{loading ? (
					<div>Loading....</div>
				) : (
            <div className="row">
            {characters.map(character=>{
              return(
                <div className="col-md-3 key={character.id}">
                <Character  character={character}/>
                </div>
              );
            })}
            </div>
        )}
        <NavPage page={page} setPage={setPage}/>
        </div>
</div>
)}
export default CharacterList