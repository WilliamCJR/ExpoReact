import React from 'react'
export const Comp4 = () => {
    const datos = [
        { id: 1, nombre: 'Juan', edad: 25 },
        { id: 2, nombre: 'María', edad: 32 },
        { id: 3, nombre: 'Pedro', edad: 18 }
      ];
    
      return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Edad</th>
            </tr>
          </thead>
          <tbody>        
            {datos.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.nombre}</td>
                <td>{item.edad}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}
