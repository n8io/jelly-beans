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
      <div
        class="Container-jlt4ba-0 ecAWRU"
      >
        <x-children />
      </div>
    `);
  });
});
