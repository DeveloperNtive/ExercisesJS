//Accept STRING_ARRAY
//Return INTEGER_ARRAY
const calcularMaximoRetorno = instruccion => {
  //1. Encontrar el punto mas lejano
  //2. Calcular el regreso de la sonda hasta el punto base
  var result = [] //Resultado
  for (let index = 0; index < instruccion.length; index++) {
    const stringInstrucciones = instruccion[index]
    const string = stringInstrucciones.toString().toLowerCase()
    const stringArray = string.split('')

    //Estado inicial
    let puntoFinal = { x: 0, y: 0 }
    var distanciaPrevia = {
      distancia: 0,
      cordenadas: {}
    }

    //Movimientos robot espacial
    for (let index = 0; index < stringArray.length; index++) {
      const element = stringArray[index]
      switch (element) {
        case 'r':
          puntoFinal.x++
          break
        case 'l':
          puntoFinal.x--
          break
        case 'u':
          puntoFinal.y++
          break
        case 'd':
          puntoFinal.y--
          break

        default:
          break
      }
      const distanciaActual = Math.sqrt(
        Math.pow(puntoFinal.x - 0, 2) + Math.pow(puntoFinal.y - 0, 2)
      )
      if (distanciaActual > distanciaPrevia.distancia) {
        let refPuntoFinal = Object.assign({}, puntoFinal)
        distanciaPrevia = {
          distancia: distanciaActual,
          cordenadas: refPuntoFinal
        }
      }
    }
    if (distanciaPrevia.cordenadas.x < 0) {
      distanciaPrevia.cordenadas.x = distanciaPrevia.cordenadas.x * -1
    }
    if (distanciaPrevia.cordenadas.y < 0) {
      distanciaPrevia.cordenadas.y = distanciaPrevia.cordenadas.y * -1
    }
    result.push(distanciaPrevia.cordenadas.y + distanciaPrevia.cordenadas.x)
  }
  return result //INTEGER_ARRAY
}
console.timeEnd('performance')

export default calcularMaximoRetorno;
