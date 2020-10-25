// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { ColorVariations, JellyBeans } from '..';

jest.mock('./Words', () => ({
  Words: (props) => <x-words {...props} />,
}));

const defaultProps = {
  colorVariations: ColorVariations.LEGO,
};

const renderComponent = (overrides) =>
  render(<JellyBeans {...defaultProps} {...overrides} />);

describe('JellyBeans', () => {
  test('should render properly', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="Container-jlt4ba-0 eDVujq"
      >
        <x-words
          count="25"
          iscentered="false"
          lengths=""
          palette="#005eff,#ffdb00,#0fa911,#ff0000"
          paragraphs="1"
          radius="100"
          size="1"
        />
      </div>
    `);
  });
});
