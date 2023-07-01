const calcularDias = prestamo => {
  //init
  const resultado = []

  //Solucion
  for (let index = 0; index < prestamo.length; index++) {
    const element = prestamo[index]
    let dias = 0
    for (let index = 1; index <= element; index = index + index) {
      dias++
    }
    resultado.push(dias)
  }

  //return
  return resultado
}
export default calcularDias
