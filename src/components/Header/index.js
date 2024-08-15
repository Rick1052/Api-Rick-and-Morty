import React from "react";

import './header.css'

function Header() {
    return (
        <div className="header">
            <h1>Personagens Rick and Morty</h1>

            <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="logo"/>
        </div>
    );
}

export default Header;