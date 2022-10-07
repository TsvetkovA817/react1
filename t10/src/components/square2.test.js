const square = require('./square');
describe('square', () => {
    test('корректрое значение1', () => {
        expect(square(2)).toBe(4);
        expect(square(2)).toBeLessThan(5);
        expect(square(2)).toBeGreaterThan(3);

        const MathPow = jest.spyOn(Math, 'pow');
        square(1);
        expect(MathPow).toBeCalledTimes(0);
    })

})
