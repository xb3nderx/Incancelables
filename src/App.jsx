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


function App() {


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
        </Routes>
      </div>
    </Router>

  );
}

export default App;
