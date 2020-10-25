import { normalize } from './options';

describe('normalize', () => {
  const defaultOptions = {
    colorVariations: 3,
    paragraphs: 1,
    size: 1,
    words: 15,
    wordRadius: 100,
  };

  const toOptions = (overrides?: any) =>
    normalize({
      ...defaultOptions,
      ...overrides,
    });

  describe('when words is an array', () => {
    const words = [1, 2, 3];

    describe('count', () => {
      test('should be the same length', () =>
        expect(toOptions({ words })).toMatchObject({ count: words.length }));
    });

    describe('lengths', () => {
      test('should be equal to words', () =>
        expect(toOptions({ words })).toMatchObject({ lengths: words }));
    });
  });

  describe('when words is a number', () => {
    const words = 3;

    describe('count', () => {
      test('should equal words', () =>
        expect(toOptions({ words })).toMatchObject({ count: words }));
    });

    describe('lengths', () => {
      test('should be equal an empty array', () =>
        expect(toOptions({ words })).toMatchObject({ lengths: [] }));
    });
  });

  describe('when size', () => {
    describe('is less than the min', () => {
      const size = -Infinity;

      test('it should be the minimum', () =>
        expect(toOptions({ size })).toMatchObject({ size: 0.1 }));
    });

    describe('is greater than the max', () => {
      const size = Infinity;

      test('it should be the maximum', () =>
        expect(toOptions({ size })).toMatchObject({ size: 10 }));
    });
  });

  describe('when word radius', () => {
    describe('is less than the min', () => {
      const wordRadius = -Infinity;

      test('it should be the minimum', () =>
        expect(toOptions({ wordRadius })).toMatchObject({ wordRadius: 1 }));
    });

    describe('is greater than the max', () => {
      const wordRadius = Infinity;

      test('it should be the maximum', () =>
        expect(toOptions({ wordRadius })).toMatchObject({ wordRadius: 100 }));
    });
  });

  describe('when paragraphs', () => {
    describe('is less than the min', () => {
      const paragraphs = -Infinity;

      test('it should be the minimum', () =>
        expect(toOptions({ paragraphs })).toMatchObject({ paragraphs: 1 }));
    });

    describe('is greater than the max', () => {
      const paragraphs = Infinity;

      test('it should be the maximum', () =>
        expect(toOptions({ paragraphs })).toMatchObject({ paragraphs: 100 }));
    });
  });

  describe('when color variations', () => {
    describe('is less than the min', () => {
      const colorVariations = -Infinity;

      test('it should be the minimum', () =>
        expect(toOptions({ colorVariations })).toMatchObject({
          colorCount: 1,
        }));
    });

    describe('is greater than the max', () => {
      const colorVariations = Infinity;

      test('it should be the maximum', () =>
        expect(toOptions({ colorVariations })).toMatchObject({
          colorCount: 20,
        }));
    });
  });

  test('has all the necessary props', () => {
    const { palette, ...actual } = toOptions();

    expect(palette).toHaveLength(defaultOptions.colorVariations);

    expect(actual).toMatchObject({
      colorCount: 3,
      count: 15,
      lengths: [],
      paragraphs: 1,
      size: 1,
      wordRadius: 100,
      words: 15,
    });
  });
});
