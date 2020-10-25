// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Word } from '.';

jest.mock('./Bean', () => ({
  Bean: (props) => <x-bean {...props} />,
}));

const defaultProps = {
  backgroundColor: '#F00',
  length: 5,
  radius: 1,
  size: 1,
};

const renderComponent = (overrides) =>
  render(<Word {...defaultProps} {...overrides} />);

describe('Word', () => {
  test('should render properly', () => {
    const { container } = renderComponent();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <x-bean
          color="#F00"
          radius="1"
          size="1"
        >
          ·
          ·
          ·
          ·
          ·
           
        </x-bean>
      </div>
    `);
  });

  test('should render the proper string', () => {
    const { container } = renderComponent();

    expect(container.firstChild.textContent).toEqual('····· ');
  });
});
