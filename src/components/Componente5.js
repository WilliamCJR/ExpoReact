import React from 'react'
var edad = 23;
export const Componente5 = () => {
    let nombre = "William";
    let arreglo = ["Deporte","Cine","LEctura"]
  return (
    <div>
        <p>Mi nombre es {nombre}</p>
        <p>Mi edad es {edad}</p>
        <h>Pasatiempos : </h>
        <ul>
            {          
                arreglo.map( (elemento,indice) => {
                    return (<li key={indice}>
                        {elemento}
                    </li>)
                })
            }
        </ul>
        <h1>{arreglo[0]}</h1>
    </div>
  )
}
export default Componente5