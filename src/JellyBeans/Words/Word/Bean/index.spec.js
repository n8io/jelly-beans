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
        class="Bean-sc-1hbca7i-0 fccDdM"
        color="#0F0"
        radius="100"
        size="5"
      >
        <x-children />
      </span>
    `);
  });
});
