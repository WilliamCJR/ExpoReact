import React from 'react'

export const Componente4 = () =>  {

  const numero1 = 15;
  const numero2 = 34;
    return (
    <div>    
        {<p>El numero mayor es </p>}{numero1 > numero2 ? <p>{numero1}</p>  :<p>{numero2}</p>}
    </div>
  )
}

export default Componente4

