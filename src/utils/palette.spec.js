import { generate } from './palette';

describe('palette', () => {
  describe('generate', () => {
    const size = 3;
    const actual = generate(size);

    test('returns a list of the proper length', () =>
      expect(actual).toHaveLength(size));

    describe('each item is a hex color', () => {
      actual.forEach((hex) => {
        const color = hex.replace(/#/g, '');

        const [red, green, blue] = [
          parseInt(color.substr(4, 2), 16),
          parseInt(color.substr(2, 2), 16),
          parseInt(color.substr(0, 2), 16),
        ];

        expect(red >= 0 && red <= 255).toBe(true);
        expect(green >= 0 && green <= 255).toBe(true);
        expect(blue >= 0 && blue <= 255).toBe(true);
      });
    });
  });
});
