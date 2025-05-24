import "../styles/Carrito.css"
import { useContext} from "react";
import CarritoCard from "./CarritoCard.jsx";
import { Navigate } from "react-router-dom";
import { CarritoContext } from "../contexts/CarritoContext.jsx";

export default function Carrito({usuarioLogeado}) {
    const {productosCarrito, vaciarCarrito, borrarProductoCarrito} = useContext(CarritoContext);
    
    console.log("Productos: " + productosCarrito)

    const total = productosCarrito.reduce(
        (subTotal, producto) => subTotal + producto.price * producto.cantidad, 0
    )

    function funcionDisparadora(id){
        borrarProductoCarrito(id)
    }

    console.log("Total: " + total)

    if(!usuarioLogeado){
        return(
            <Navigate to="/login" replace/>
        )
    }

    return(
        <div className="carrito-conteiner">
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
            <div className="carrito-titulos" >
                <h2 className="carrito-titulo-producto"> Producto </h2>
                <h2 className="carrito-titulo-descripcion">Descripción</h2>
                <h2>  </h2>
                <h2> Cantidad </h2>
                <h2> Precio unitario </h2>
                <h2> Sub total </h2>
                <h2>  </h2>
            </div>
            {productosCarrito.length > 0 ? productosCarrito.map((producto) => (
                <CarritoCard 
                    producto={producto}
                    funcionDisparadora={funcionDisparadora}
                />
            ))
            : <p>Carrito vacio</p>}
            {total > 0 ? <span>Total a pagar: {total.toFixed(2)} $</span>: <></>}
        </div>
    )
}