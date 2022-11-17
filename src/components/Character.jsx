import React from "react";

function Character({character}){
    return(
        <div className="text-center p-5">
            
            <h5 className="personaje-header">{character.name}</h5>
            <div className='estado'>
					<span className={character.status}></span>
					<h6>{character.status}</h6>
                    </div>
            <img className="img-fluid rounded-pill img-pill" src={character.image} alt={character.name}/>
            <p>{character.origin.name}</p>
        </div>
    )
}
export default Character