import maximoNumeroHoras from './src/index'
describe('Estaimacion perdida', () => {
  it('primer test: expect [[2, 4, 2], [3, 16, 8]] to be [6, 32]', () => {
    const input = [
      [2, 4, 2],
      [3, 16, 8]
    ]
    expect(maximoNumeroHoras(input)).toStrictEqual([6, 32])
  })

  it('primer test: expect [[2, 4, 2], [3, 16, 8]] to be [6, 32]', () => {
    const input = [
      [3, 2, 1],
      [4, 1, 1]
    ]
    expect(maximoNumeroHoras(input)).toStrictEqual([4, 1])
  })
})
