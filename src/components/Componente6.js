import React from 'react'
var edad = 23;
export const Componente6 = () => {
    const persona = {
        nombre: 'William',
        edad: 30,
        email: 'william@example.com'
      }
    
      return (
        <div>
          <p class = "titulo">Nombre: {persona.nombre}</p>
          <p>Edad: {persona.edad}</p>
          <p>Email: {persona.email}</p>
        </div>
      );
}
export default Componente6