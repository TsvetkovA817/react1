const delay = require('./delay');

describe('delay', () => {
    test('1', async () => {
        const sm = await delay(() => (5 + 5), 1000);
        expect(sm).toBe(10);
    })
})