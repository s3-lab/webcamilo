import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';


function Header() {



    //Se coloca código estandar de javascrip en este espacio

    return( /* html en este espacio y { codigo js entre corchetes } */
        <header className="header" >
            <div className="contenedor">
            <div className="barra">
                <Link to='/home' className="logo">
                <h1 className="no-margin centrar-texto">C</h1>
                </Link>

                <nav className="navegacion">
                    <Link to='/works' className="navegacion__enlace">Works</Link>
                    <Link to='/blog' className="navegacion__enlace">Blog</Link>
                    <Link to='/prints' className="navegacion__enlace">Prints</Link>
                    <Link to='/about' className="navegacion__enlace">About</Link>
                    <Link to='/contact' className="navegacion__enlace">Contact</Link>
                </nav>
            </div>
        </div>
    </header>
    )
}


export default Header;