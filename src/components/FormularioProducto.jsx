import React, { useState } from 'react';

function FormularioProducto({ onAgregar }) {
  const [producto, setProducto] = useState({
    name: '',
    price: '',
    description: '',
  });
 const [errores, setErrores] = useState({});
  const validarFormulario = () => {
 
  const nuevosErrores = {};
  if (!producto.name.trim()) {
    nuevosErrores.name = 'El nombre es obligatorio.';
  }
  if (!producto.price || producto.price <= 0) {
    nuevosErrores.price = 'El precio debe ser mayor a 0.';
  }
  if (!producto.description.trim() || producto.description.length < 10) {
    nuevosErrores.description = 'La descripción debe tener al menos 10 caracteres.';
  }
  setErrores(nuevosErrores);
  return Object.keys(nuevosErrores).length === 0;};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto({ ...producto, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarFormulario()) {
      onAgregar(producto);
      setProducto({ name: '', price: '', description: '' });
      setErrores({});
    } 
  }


  return ( 
    <form onSubmit={handleSubmit}>
      <h2>Agregar Producto</h2>
      <div>
        <label>Nombre:</label>
        <input
          type="text" name="name" value={producto.name} onChange={handleChange} required/>
      </div>
      <div>
        <label>Precio:</label>
        <input type="number" name="price" value={producto.price} onChange={handleChange} required
          min="0"/>
      </div>
       <div>
        <label>Descripción:</label>
        <textarea
          name="description"
          value={producto.description}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Agregar Producto</button>
    </form>
  );
}

export default FormularioProducto;
