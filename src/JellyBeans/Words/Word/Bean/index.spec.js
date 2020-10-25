// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Bean } from '.';

const defaultProps = {
  children: <x-children />,
  color: '#0F0',
  radius: 100,
  size: 5,
};

const renderComponent = (overrides) =>
  render(<Bean {...defaultProps} {...overrides} />);

describe('Bean', () => {
  test('should render properly', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        --jelly-beans-color: #0F0;
        --jelly-beans-radius: 100;
        --jelly-beans-size: 5;
        border-radius: calc((100 / 100) * 0.5 * 5 * 1rem);
        background-color: var(--jelly-beans-color);
        color: var(--jelly-beans-color);
        display: inline;
        font-family: monospace;
        font-size: calc(var(--jelly-beans-size) * 1rem);
        margin-inline-end: calc(var(--jelly-beans-size) * 0.25rem);
        margin-block-start: calc(var(--jelly-beans-size) * 0.25rem);
        max-width: 100%;
        overflow-x: hidden;
        width: auto;
      }

      <span
        class="c0"
        color="#0F0"
        radius="100"
        size="5"
      >
        <x-children />
      </span>
    `);
  });
});
