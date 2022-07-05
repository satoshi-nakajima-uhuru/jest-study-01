const {sum} = require('./sum');
const {times} = require('./sum');

describe('複数テスト', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('adds 2 + 4 to equal 6', () => {
    expect(sum(2, 4)).toBe(6);
  });
  test('2 + 4 = 7 ではない', () => {
    expect(sum(2, 4)).not.toBe(7);
  });
});

test('1 * 2 = 2', () => {
  expect(times(1, 2)).toBe(2);
});
