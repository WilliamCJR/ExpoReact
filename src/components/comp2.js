
import React, { useState } from 'react';
export const Comp2 = () => {
let [cont, setcont] = useState(0);

    const cambiar_contador = (tarea) => {
    if (tarea === "sumar"){
         cont ++
    }
      else if (tarea === "reiniciar"){
        cont = 0
      }
      setcont(cont);
    };

    return (
        <div>
            
            <br></br>Contador : {cont}
            <br></br>
            <button onClick={ e => cambiar_contador("sumar")}>Sumar</button><br></br>
            <button onClick={ e => cambiar_contador("reiniciar")}>Reiniciar</button>
        </div>  
  )
}
