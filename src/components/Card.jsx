import "../styles/ProductoDetalle.css"
import { Link } from "react-router-dom";

function Card({producto}){

    return(
        <div className="producto-card" >
            <h2 className= "producto-nombre">{producto.name}</h2>
            <Link to={"/productos/"+ producto.id}><img className="producto-image" src={producto.imagen}></img></Link>
            <p style={{color:"black"}}>{producto.price} $</p>
            <Link to={"/productos/" + producto.id} ><button style={{color:"black"}}>Ver detalles del producto</button></Link>
        </div>
    )
}

export default Card