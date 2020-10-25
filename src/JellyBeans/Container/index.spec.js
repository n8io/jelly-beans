// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Container } from '.';

const defaultProps = {
  children: <x-children />,
  isGrayscale: true,
  isRtl: true,
};

const renderComponent = (overrides) =>
  render(<Container {...defaultProps} {...overrides} />);

describe('Container', () => {
  test('should render properly', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        --jelly-beans-grayscale: 100;
        --jelly-beans-rtl: rtl;
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
        <x-children />
      </div>
    `);
  });
});
