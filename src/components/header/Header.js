import React from 'react';
import { Link } from "react-router-dom";
import './Header.scss';


function Header() {



    //Se coloca código estandar de javascrip en este espacio

    return( /* html en este espacio y { codigo js entre corchetes } */
        <header class="header" >
            <div class="contenedor">
            <div class="barra">
                <Link to='/home'><a class="logo" href="index.html">
                <h1 class="no-margin centrar-texto">C</h1>
                </a>
                </Link>

                <nav class="navegacion">
                    <Link to='/works' class="navegacion__enlace">Works</Link>
                    <Link to='/blog' class="navegacion__enlace">Blog</Link>
                    <Link to='/prints' class="navegacion__enlace">Prints</Link>
                    <Link to='/about' class="navegacion__enlace">About</Link>
                    <Link to='/contact' class="navegacion__enlace">Contact</Link>
                </nav>
            </div>
        </div>
    </header>
    )
}


export default Header;