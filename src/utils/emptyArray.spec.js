import { emptyArray } from './emptyArray';

describe('emptyArray', () => {
  const size = 3;

  test('returns an empty array of the correct size', () =>
    expect(emptyArray(size)).toBeInstanceOf(Array));

  test('returns an empty array of the correct size', () =>
    expect(emptyArray(size)).toHaveLength(size));
});
