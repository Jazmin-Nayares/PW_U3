import React from 'react'
import Navegacion from './Navegacion'
import Encabezado from './Encabezado'
import Caracteristicas from './Caracteristicas'
import Testimonio from './Testimonio'
import Blog_inicial from './Blog_inicial'
import Blog_1 from './Blog_1'
import Blog_2 from './Blog_2'
import Blog_3 from './Blog_3'
import Footer from './Footer'

export default function Inicio() {
  return (
    <div>
        <Navegacion/>
        <Encabezado/>
        <Caracteristicas/>
        <Testimonio/>
        <Blog_inicial/>
        < div className='row'>
            <Blog_1/>
            <Blog_2/>
            <Blog_3/>
        </div>
        <Footer/>

    </div>
  )
}
