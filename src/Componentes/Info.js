import React, { useEffect, useState } from "react";

const Info=()=>{
    const [info, setInfo]=useState([])

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response=>response.json())
        .then(data=>setInfo(data.results))
    },[])

    return(
        <div>
            {
                info.map(item=>(
                    <div key={item.id}>
                        <p></p>
                    </div>
                ))
            }
        </div>
    )
}

export default Info