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
      .c0 {
        line-height: calc(var(--jelly-beans-size) * 1.5rem);
        margin-block-end: 0;
        margin-block-start: calc(var(--jelly-beans-size) * 1.5rem);
        text-align: start;
      }

      .c0:first-child {
        margin-block-end: 0;
        margin-block-start: 0;
      }

      <p
        class="c0"
      >
        <x-children />
      </p>
    `);
  });
});
