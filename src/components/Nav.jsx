import { NavLink } from "react-router-dom";
import { useContext} from "react";
import { CarritoContext } from "../contexts/CarritoContext.jsx";

function Nav() {
  const {productosCarrito} = useContext(CarritoContext);

  return (
    <nav style={{ backgroundColor: "#333", color: "white",  width: "100%", height: "3rem",fontSize: "1.5rem"}}>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0, padding: 0, alignItems: "center" }}>
        <li>
          {/* <NavLink to="/" style={({ isActive }) => linkStyle(isActive)}>Inicio</NavLink> */}
          <NavLink to="/" end style={({ isActive }) => linkStyle(isActive)}>Inicio</NavLink>
        </li>
        <li>
          <NavLink to="/productos" style={({ isActive }) => linkStyle(isActive)}>Productos</NavLink>
        </li>
        <li>
          <NavLink to="/nosotros" style={({ isActive }) => linkStyle(isActive)}>Nosotros</NavLink>
        </li>
        <li>
          <NavLink to="/contacto" style={({ isActive }) => linkStyle(isActive)}>Contacto</NavLink>
        </li>
        <li>
          <NavLink to="/carrito" style={({ isActive }) => linkStyle(isActive)}>
            Carrito <span>{productosCarrito.length > 0 ? productosCarrito.length : ""}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/admin" style={({ isActive }) => linkStyle(isActive)}>Admin</NavLink>
        </li>
        <li>
          <NavLink to="/login" style={({ isActive }) => linkStyle(isActive)}>Login</NavLink>
        </li>
        <li>
          <NavLink to="/admin/agregarproductos" style={({ isActive }) => linkStyle(isActive)}>formulario producto</NavLink>
        </li>
      </ul>
    </nav>
  );
}

function linkStyle(isActive) {
  return {
    color: "white",
    textDecoration: "none",
    backgroundColor: isActive ? "#e07e0ee6" : "transparent",
    padding: "0.4rem 0.8rem",       // un poco más de padding vertical y horizontal
    display: "flex",                // esto permite usar alignItems
    alignItems: "center",           // centra verticalmente el contenido dentro del enlace
    height: "100%",                 // asegura que el fondo cubra toda la altura del nav
    borderRadius: "5px",
    boxSizing: "border-box"         // evita que padding rompa el layout
    // color: "white",
    // textDecoration: "none",
    // backgroundColor: isActive ? "#e07e0ee6" : "transparent",
    // padding: "0.2rem",
    // alignItems: "center",
    // borderRadius: "5px"
  };
}

export default Nav; 