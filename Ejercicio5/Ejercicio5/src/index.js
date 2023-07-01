const cantidadMinimaDeDias = cantidadElementos => {
  //Init
  let result = 0
  const sortedArray = cantidadElementos.sort()
  var valUnicos = []

  //Solucion
  for (let index = 0; index < cantidadElementos.length; index++) {
    const elementActual = cantidadElementos[index]
    const elementSiguiente = cantidadElementos[index + 1]
    if (elementActual != elementSiguiente) {
      valUnicos.push(elementActual)
    }
  }
  console.log(sortedArray)
  result = valUnicos.length

  return result
}

export default cantidadMinimaDeDias
