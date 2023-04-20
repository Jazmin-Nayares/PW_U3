import './App.css';
import Inicio from './Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ComponenteDemo from './ComponenteDemo';
import Navegacion from './Navegacion'
import About from './Components/About'
import Contact from './Components/Contact'
import Faq from './Components/Faq'
import Pricing from './Components/Pricing'

function App() {
  return (
    <div className="App">
      <Navegacion/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
	  <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;