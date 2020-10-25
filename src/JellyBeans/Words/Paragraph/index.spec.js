// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Paragraph } from '.';

const defaultProps = {
  children: <x-children />,
  isGrayscale: true,
  isRtl: true,
};

const renderComponent = (overrides) =>
  render(<Paragraph {...defaultProps} {...overrides} />);

describe('Paragraph', () => {
  test('should render properly', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        class="Paragraph-sc-8xh4rr-0 dSyFWd"
      >
        <x-children />
      </p>
    `);
  });
});
