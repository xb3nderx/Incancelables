import { NavLink } from "react-router-dom";


function Nav({ productosCarrito }) {
  return (
    <nav style={{ backgroundColor: "#333", color: "white", padding: "10px", width: "100%" }}>
      <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0, padding: 0 }}>
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
      </ul>
    </nav>
  );
}

function linkStyle(isActive) {
  return {
    color: "white",
    textDecoration: "none",
    backgroundColor: isActive ? "#e07e0ee6" : "transparent",
    padding: "5px 10px",
    borderRadius: "5px"
  };
}

export default Nav; 