const perfeccionista = arr => {
  // D -> Numero de dias del deadline
  // T -> Cantidad de funciones que espera el cliente
  // F -> Funciones nuevas xDia
  // R -> Cantidad de funciones borradas

  //resultado
  //1 = true
  //0 = false
  let resultado = []

  //Solucion
  for (let index = 0; index < arr.length; index++) {
    //variables iniciales
    const element = arr[index]
    let d = element[0], //Numero de dias del deadLine
      t = element[1], //Cantidad de funciones que espera el cliente
      f = element[2], //Funciones nuevas xDia
      r = element[3] //Cantidad de funciones borradas
    var fxDia = f - r
    var acc = 0
    for (let index = 0; index < d - 1; index++) {
      acc += fxDia
    }
    acc += f
    if (t > acc) {
      resultado.push(false)
    } else {
      resultado.push(true)
    }
  }

  //retorno
  return resultado
}
export default perfeccionista

const arr = [
  [2, 40, 20, 5],
  [5, 110, 30, 10]
]
