const addString = require('./addString');

test('add abc', () => {
  expect(addString("huga")).toBe("hugahuga");
});
