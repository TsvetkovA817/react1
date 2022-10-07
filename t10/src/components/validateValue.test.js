const validateValue = require('./validateValue');

describe('validateValue', () => {
    test('корректное значение', () => {
        expect(validateValue(2)).toBe(true);
    })
    test('не корректное значение', () => {
        expect(validateValue(5)).toBe(false);
    })
    test('нулевое', () => {
        expect(validateValue(0)).toBe(true);
    })
})