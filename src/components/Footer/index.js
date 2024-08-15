import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

import LogoHenrique from '../../assets/images/logo_henrique.png'

function Footer() {
    return (
        <div className="footer">

            <h3>Api Rick and Morty</h3>
            <p>Criado por <Link to="https://www.instagram.com/riick_gab">Henrique Gabriel Santos</Link></p>
            <img src={LogoHenrique} alt="Logo" />
        </div>

    );
}

export default Footer;