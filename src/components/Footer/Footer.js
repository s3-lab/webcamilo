import React from 'react';
import { Link } from "react-router-dom";

import './Footer.scss';

function Footer() {
 return (
        <footer className="footer">
            <div className="contenedor">
            <div className="barra">
                <Link to='/home' className="logo" >
                    <h1 className="no-margin centrar-texto">C</h1>
                </Link>
                <nav className="navegacion">
                    <Link to='/works'  className="navegacion__enlace">Projects</Link>
                    <Link  to='/contact' className="navegacion__enlace">info.camilodiazsalamanca@gmail.com</Link>
                    <Link to='/works' className="navegacion__enlace">instagram</Link>
                </nav>
            </div>
        </div>
    </footer>
 )
 
}


export default Footer;