
import React, { useState } from 'react';
export const Comp3 = () => {
let [mensaje, setmensaje] = useState("");

    const cambiar_mensaje = (mensaje) => {
    
      setmensaje(mensaje);
    };
    return (
        <div>
            <br></br>Mensaje : {mensaje}
            <br></br>
            <input onChange={ e => cambiar_mensaje(e.target.value)}></input><br></br>

        </div>  
  )
}


