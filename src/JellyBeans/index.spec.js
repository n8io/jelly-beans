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
      .c0 {
        --jelly-beans-grayscale: 0;
        --jelly-beans-rtl: inherit;
        direction: var(--jelly-beans-rtl);
        display: inline-block;
        -webkit-filter: grayscale(calc(var(--jelly-beans-grayscale) * 1%));
        filter: grayscale(calc(var(--jelly-beans-grayscale) * 1%));
        height: 100%;
        overflow-x: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        width: 100%;
      }

      <div
        class="c0"
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
