import calcularDias from './src/index'

describe('La deuda', () => {
    it('test 1: expect [15] to be [4]', () => {
        const input = [15]
        expect(calcularDias(input)).toStrictEqual([4])
    });
    
    it('test 2: expect [15, 16, 45] to be [4, 5, 6]', () => {
        const input = [15, 16, 45]
        expect(calcularDias(input)).toStrictEqual([4, 5, 6])
    });
    
});
