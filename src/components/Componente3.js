import React from 'react'

export const Componente3 = () =>  {

  const numero = 15;
  const numero2 = -5;
    return (
    <div>    
        {numero > 0 ? <p>{numero} es positivo</p> : <p>{numero} es negativo o cero</p>}
        {numero2 > 0 ? <p>{numero2} es positivo</p> : <p>{numero2} es negativo o cero</p>}
    </div>
  )
}

export default Componente3

