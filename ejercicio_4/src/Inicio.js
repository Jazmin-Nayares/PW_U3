import React from 'react'

import Encabezado from './Encabezado'
import Destacados from './Destacados'
import Testimonios from './Testimonios'
import Blog from './Blog'
import Pie from './Pie'

export default function Inicio() {
  return (
    <div>
        <Encabezado/>
        <Destacados/>
        <Testimonios/>
        <Blog/>
        <Pie/>
    </div>
  )
}
