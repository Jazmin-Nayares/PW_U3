import React from 'react'
import Encabezado from './Encabezado'
import Tarjeta from './Tarjeta'

export default function ListaTarjetas() {
  return (
    <div className='Container'>
      <div className='row'>
        <Encabezado titulo="Tarjetas"/>
      </div>
      <div className='row'>
          <div className="col-4"><Tarjeta datos={{titulo:"Nota_1",texto:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",urlImagen:"https://picsum.photos/120/120?random=1",botontxt:"Seguir leyendo"}}/></div>
          <div className="col-4"><Tarjeta datos={{titulo:"Nota_2",texto:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",urlImagen:"https://picsum.photos/120/120?random=2",botontxt:"Seguir leyendo"}}/></div>
          <div className="col-4"><Tarjeta datos={{titulo:"Nota_3",texto:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",urlImagen:"https://picsum.photos/120/120?random=3",botontxt:"Seguir leyendo"}}/></div>
       </div>
    </div>
  )
}
