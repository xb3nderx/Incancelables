import "./App.css";
import Home from "./layouts/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav";
import ProductosContainer from "./components/ProductosContainer";
import Carrito from "./components/Carrito";
import About from "./components/About";
import Contacto from "./components/Contacto";
import ProductoDetalle from "./components/ProductoDetalle";
import Admin from "./components/Admin";
import Login from "./components/Login";
import FormularioProducto from './components/FormularioProducto';


function App() {

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch('https://68100d9127f2fdac24101f96.mockapi.io/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (!respuesta.ok) {
              throw new Error('Error al agregar el producto.');
      }
      const data = await respuesta.json();
            console.log('Producto agregado:', data);
            alert('Producto agregado correctamente');
          } catch (error) {
            console.error(error.message);
            alert('Hubo un problema al agregar el producto.');
          }
  };

  return (
    <Router basename="/Incancelables">
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path= "/login" element ={<Login />} />
          <Route path="/productos" element={<ProductosContainer />} />
          <Route path="/carrito" element={<Carrito />}/>
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/productos/:id" element={<ProductoDetalle/>}/>
          <Route path= "/admin" element ={<Admin />} />
          <Route path="/admin/agregarProductos" element={<FormularioProducto onAgregar={agregarProducto} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
