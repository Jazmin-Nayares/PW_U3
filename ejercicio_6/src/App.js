import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './shared/Layout';
import Inicio from './inicio/Inicio';
import Blog from './blog/Blog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Inicio/>}/>
        <Route path="/blog/:id" element={<Blog/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
