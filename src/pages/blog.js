import React, {useEffect} from 'react';
import Header from '../components/header/Header';
import Titulos_hero from '../components/tituloshero/Titulos_hero';
import Layout_blog from '../components/blog/Layout_blog';
import useFetch from '../hooks/useFetch';
import { urlApiProducts} from "../utils/constants"



function Blog() {

        const entradas = useFetch(urlApiProducts);



    return( 
        <div >
          <Header/>
          <Titulos_hero pagina='blog'/>
          <Layout_blog/>
    </div>
    )
}


export default Blog;