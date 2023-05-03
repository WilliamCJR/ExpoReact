import React from 'react'

export const Componente2 = () =>  {
  const numero1 = 10;
  const numero2 = 30;
  const numero = 15;
    return (
    <div>    
        <p>La suma entre  {numero1} y {numero2} es {numero1 + numero2}</p>
        <p>La division entre  {numero1} y {numero2} es {numero1 / numero2}</p>
        <p>La division entre  {numero1} y {numero2} es {(numero1 / numero2).toFixed(2)}</p>
        <p>El doble de  {numero1}  es {numero1 * 2}</p>       
       
    </div>
  )
}

export default Componente2

