import React from 'react'

export default function 
() {
  return (
      //En lugar de class se coloca className ademas de que los estilos en lugar de tener comillas se colocaran doble llave y el valor de la propiedad 
      //debera ir entre comillas.
    <div className="card" style={{width: "18rem"}}>
    <img src="https://picsum.photos/120/120?random=1" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
   </div>
  )
}
