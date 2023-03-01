const app = require('./helloapp');
const a = require('./helloapp');
test('hello word', () => {
  expect(app(a)).toBe('Hellow World!');
});
