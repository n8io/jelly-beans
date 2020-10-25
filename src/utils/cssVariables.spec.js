import { Namespace } from '../constants/namespace';
import { read, toName } from './cssVariable';

describe('cssVariables', () => {
  const name = 'NAME';

  describe('read', () => {
    test('should return the correct css', () =>
      expect(read(name)).toEqual(`var(--${Namespace.CSS}-${name})`));
  });

  describe('toName', () => {
    test('should return the correct css', () =>
      expect(toName(name)).toEqual(`--${Namespace.CSS}-${name}`));
  });
});
