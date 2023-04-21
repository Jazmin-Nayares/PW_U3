import React,{useState} from 'react'

export default function Inicio() {
  
  //Defincion de estado para ID
  const [id, setId] = useState(0);
  //

  return (
    <>
    <div class="container">
    <form>
      <div class="mb-4">
        <label for="ID_B" class="form-label">id a Buscar</label>
        <input value={id} type="text" class="form-control" id="ID_B" onChange={(e) => setId(id => e.target.value)}/>
      </div>
      <a href={'/datos/'+id} class='btn btn-primary'>Buscar</a>
      {/* <a href={`/datos/ $id`} class='btn btn-primary'>Buscar</a> */}
    </form>
    </div>  
    </>
  )
}
