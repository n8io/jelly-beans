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
      <span
        style="display: inline; font-family: monospace; max-width: 100%; overflow-x: hidden; width: auto; border-radius: 2.5rem; color: rgb(0, 255, 0); background-color: rgb(0, 255, 0); font-size: 5rem; margin-inline-end: 1.25rem; margin-block-start: 1.25rem;"
      >
        <x-children />
      </span>
    `);
  });
});
