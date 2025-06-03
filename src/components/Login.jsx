import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import { crearUsuario, loginEmailPass  } from '../auth/firebase';
import { dispararSweetBasico } from '../assets/SweetAlert';

function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const { login, user, logout} = useAuthContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de autenticación
    if (usuario === 'admin' && password === '1234') {
      login(usuario);
      navigate('/');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  function registrarUsuario (e){
    e.preventDefault();
    crearUsuario(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Registro exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      dispararSweetBasico("No se pudo registrar", error, "error", "Confirmar")
    })
  }

  function iniciarSesionEmailPass (e) {
    e.preventDefault();
    loginEmailPass(usuario, password).then((user) => {
      login(usuario)
      dispararSweetBasico("Logeo exitoso", "", "success", "Confirmar")
    }).catch((error) => {
      dispararSweetBasico("user o password invalido", error, "error", "Confirmar")
    })
  }

  const handleSubmit2 = (e) => {
    e.preventDefault();
    logout();
  }
  
if(user){
    return (
        <form onSubmit={handleSubmit2}>
            <button type="submit">Cerrar sesión</button>
        </form>
    )
}


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Iniciar sesión</h2>
        <div>
          <label>Usuario:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form> 
      <form onSubmit={registrarUsuario}>
        <h2>Registrarse</h2>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Registrarse</button>
      </form> 
      <form onSubmit={iniciarSesionEmailPass}>
      <h2>Iniciar sesión con Email y pass</h2>
      <div>
        <label>Email</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />
      </div>
      <div>
        <label>Contraseña:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
    </div>
    
  );
}
export default Login;