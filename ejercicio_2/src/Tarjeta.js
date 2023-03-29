import React from 'react'

export default function Tarjeta ({datos}) {
  return (
      //En lugar de class se coloca className ademas de que los estilos en lugar de tener comillas se colocaran doble llave y el valor de la propiedad 
      //debera ir entre comillas.
    <div className="card" style={{width: "18rem"}}>
    <img src={datos.urlImagen} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{datos.titulo}</h5>
      <p className="card-text">{datos.texto}</p>
      <a href="#" className="btn btn-primary">{datos.botontxt}</a>
    </div>
   </div>
  )
}
