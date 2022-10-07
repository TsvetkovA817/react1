const mapArrToStr = require('./mapArrToStr');

describe('mapArrToStr', () => {
    test('корректное значение', () => {
        expect(mapArrToStr([1, 2, 3])).toEqual(['1', '2', '3']);
    })
    test('c разными типами', () => {
        expect(mapArrToStr([1, 'f', 2, 'vv', 3, 9.5])).toEqual(['1', '2', '3']);
    })
    test('пустой', () => {
        expect(mapArrToStr(['f', 'vv', 9.5])).toEqual([]);
    })

})