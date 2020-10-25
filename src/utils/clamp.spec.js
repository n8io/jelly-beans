import { clamp } from './clamp';

describe('clamp', () => {
  const max = 10;
  const min = 1;

  test('respects the max', () =>
    expect(clamp(min, max, Infinity)).toEqual(max));

  test('respects the min', () =>
    expect(clamp(min, max, -Infinity)).toEqual(min));
});
