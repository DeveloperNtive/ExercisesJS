import cantidadMinimaDeDias from './src/index'
test('test 1: expect [5, 3, 5, 2, 5] to be 3', () => {
  const input = [5, 3, 5, 2, 5]
  expect(cantidadMinimaDeDias(input)).toStrictEqual(3)
})

test('test 1: expect [1, 2, 3, 4] to be 3', () => {
  const input = [1, 2, 3, 4]
  expect(cantidadMinimaDeDias(input)).toStrictEqual(4)
})

test('test 1: expect [1, 2, 3, 4] to be 3', () => {
  const input = [1, 2, 3, 4]
  expect(cantidadMinimaDeDias(input)).toStrictEqual(4)
})
