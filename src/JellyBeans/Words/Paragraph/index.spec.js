// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Paragraph } from '.';

const defaultProps = {
  children: <x-children />,
};

const renderComponent = (overrides) =>
  render(<Paragraph {...defaultProps} {...overrides} />);

describe('Paragraph', () => {
  test('should render properly', () => {
    const { container } = renderComponent();

    expect(container.firstChild).toMatchInlineSnapshot(`
      <p
        style="margin-block-end: 0; line-height: 1.5rem; margin-block-start: 1.5rem; text-align: start;"
      >
        <x-children />
      </p>
    `);
  });
});
