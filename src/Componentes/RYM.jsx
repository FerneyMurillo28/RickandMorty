import React from "react";

const Header=({title})=>{
    return(
        <header>
            <div>
                <h1 className="titulo">{title}</h1>
            </div>
        </header>
    )
}

export default Header