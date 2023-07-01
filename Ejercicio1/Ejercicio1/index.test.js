import calcularMaximoRetorno from './src/index'

test("Salvar al robot de las cordenadas:  ['RUULLLDDDR']", () => {
  const instruccion = ['RUULLLDDDR']
  expect(calcularMaximoRetorno(instruccion)).toContain(4)
})

test("Salvar al robot de las cordenada: ['U', 'UUU']", () => {
  const instruccion = ['U', 'UUU']
  expect(calcularMaximoRetorno(instruccion)).toContain(1, 3)
})