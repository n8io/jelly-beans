import { integer as randomInteger } from './random';

describe('random', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  });

  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  describe('integer', () => {
    const max = 10;
    const min = 1;

    test('returns a random integer', () =>
      expect(randomInteger(min, max)).toEqual(max / 2));
  });
});
