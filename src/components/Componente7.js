import React from 'react'
var edad = 23;
export const Componente7 = () => {
  const diccionario = {
    "Palabra 1": "Definición 1",
    "Palabra 2": "Definición 2",
    "Palabra 3": "Definición 3"
  }

  return (
    <div>
      {Object.keys(diccionario).map((palabra, index) => (
        <div key={index}>
          <p>{palabra} - {diccionario[palabra]}</p>
        </div>
      ))}
    </div>
  );
}
export default Componente7

