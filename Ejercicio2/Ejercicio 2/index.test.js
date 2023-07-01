import perfeccionista from './src/index'

describe('El programador perfeccionista', () => {
  it('Primer test: expect [5, 110, 30, 10] to be [true]', () => {
    const input = [[5, 110, 30, 10]]
    expect(perfeccionista(input)).toStrictEqual([true])
  })

  it('Primer test: expect [5, 110, 30, 10] to be [false, true]', () => {
    const input = [
      [2, 40, 20, 5],
      [5, 110, 30, 10]
    ]
    expect(perfeccionista(input)).toStrictEqual([false, true])
  })
})
