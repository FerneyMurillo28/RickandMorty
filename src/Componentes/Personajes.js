/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import {BrowserRouter as Router, Route, Link, Routes} from "react-router-dom"

const Personajes=()=>{
    const [personajes, setPersonajes]=useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response=>response.json())
        .then(data=>setPersonajes(data.results))
    },[])

    const[style, setStyle]=useState("cont");
    const changeStyle=()=>{
        setStyle("cont2");
    }
    const changeStyle1=()=>{
        setStyle("cont");
    }
    const[stilo, setStilo]=useState("carta");
    const camCard=()=>{
        setStilo("carta2");
    }
    const camCard1=()=>{
        setStilo("carta");
    }

    function uno(){
        camCard();
        changeStyle();
    }

    function dos(){
        camCard1();
        changeStyle1();
    }

    return(
        <Router>
            <div>
                <div>
                    {
                        personajes.map(item=>(
                            <div key={item.id} className="contenedor">
                                <img src={item.image} alt={item.name}/>
                                <div className="dos">
                                    <h3>Nombre: {item.name}</h3>
                                    <p><Link to="/" className={stilo} onClick={uno} id="zelda">Mas informacion</Link></p>
                                    <div className={style}>
                                        <div>
                                            <p>Especie: {item.species}</p>
                                            <p>Estado: {item.status}</p>
                                            <p>Origen: {item.origin.name}</p>
                                            <p>Localizacion: {item.location.name}</p>
                                            <p>Genero: {item.gender}</p>
                                            <p><Link to="/" onClick={dos} id="zelda">Menos informacion</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Router>
    );
}

export default Personajes