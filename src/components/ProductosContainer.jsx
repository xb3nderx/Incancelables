import { useEffect, useState } from "react"
import "../styles/Productos.css"
import Card from "./Card"

function ProductosContainer(){
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    {useEffect(() => {
        fetch('https://68100d9127f2fdac24101f96.mockapi.io/productos')
            .then((respuesta) =>
                respuesta.json()
            )
            .then((datos) => {
                console.log(datos)
                setProductos(datos)
                setCargando(false);
            })
            .catch((error) => {
                console.log("Error", error)
                setError('Hubo un problema al cargar los productos.');
                setCargando(false);
            });
    }, []);}


    if (cargando) {
        return <p>Cargando productos...</p>;
    }else if (error){
        return <p>{error}</p>;
    }else{
        return(
            <div className="productos-container">
                {productos.map((producto) => (
                    <Card
                        producto={producto}
                    />
                ))}
            </div>
        )
    }

    
}

export default ProductosContainer

