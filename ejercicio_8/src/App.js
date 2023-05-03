import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
//El usestate se utiliza para guardar la lista y el use effect para realizar los cambios.


function App() {

  const [elementos_lista,setElementos_lista] = useState();
 //use effect se ejecutara encuentre al app pero no la ejecutara debemos llamarla para que se ejecute
  useEffect(()=>{
    const obten_lista_por_hacer = async () => {
      try{
        //siempre que hay un async debe haber un await que es el que espera una respuest
        const respuesta = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setElementos_lista(respuesta.data);
        //data para que tome todo tipo de informacion que sea de tipo data
      }
      catch(error){
        console.log(`Error al momento de cargar ${error}`);
    }
      //catch(error){console.log(`Error al llamar la lista ${error}`)}
    }
    //se llama la funcion
    obten_lista_por_hacer();
  },[]);
  //Los corchetes indican que se ejecutara la primera vez
  if(!elementos_lista){return(<p>Cargando elementos de la lista.... :8</p>)}
  //con el ! se niega por lo que la declaracion dice que si no hay nada en el elementos lista entonces muestre el siguiente mensaje.
  return (
    <div className="App">
      <ul class="list-group">
        {elementos_lista.map((elemento) => (
          <li class="list-group-item">{elemento.title}</li>    
        ))}
        {/* <li class="list-group-item list-group-item-success">A simple success list group item</li>    
        <li class="list-group-item list-group-item-danger">A simple secondary list group item</li> */}
      </ul>
    </div>
  );
}

export default App;
