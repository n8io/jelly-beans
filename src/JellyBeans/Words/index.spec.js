// eslint-disable-next-line import/no-extraneous-dependencies
import { render } from '@testing-library/react';
import React from 'react';
import { Words } from '.';

jest.mock('./Word', () => ({
  Word: (props) => <x-word {...props} data-testid="word" />,
}));

const defaultProps = {
  count: 7,
  isCentered: false,
  palette: ['#F00', '#0F0', '#00F'],
  paragraphs: 2,
  radius: 100,
  size: 1,
};

const renderComponent = (overrides) =>
  render(<Words {...defaultProps} {...overrides} />);

describe('Words', () => {
  test('should render properly', () => {
    const { container } = renderComponent();

    expect(container).toMatchInlineSnapshot(`
      .c0 {
        --jelly-beans-size: 1;
        line-height: calc(var(--jelly-beans-size) * 1.5rem);
        margin-block-end: 0;
        margin-block-start: calc(var(--jelly-beans-size) * 1.5rem);
        text-align: start;
      }

      .c0:first-child {
        margin-block-end: 0;
        margin-block-start: 0;
      }

      <div>
        <p
          class="c0"
          size="1"
        >
          <x-word
            backgroundcolor="#F00"
            data-testid="word"
            radius="100"
            size="1"
          />
          <x-word
            backgroundcolor="#0F0"
            data-testid="word"
            radius="100"
            size="1"
          />
          <x-word
            backgroundcolor="#00F"
            data-testid="word"
            radius="100"
            size="1"
          />
          <x-word
            backgroundcolor="#F00"
            data-testid="word"
            radius="100"
            size="1"
          />
        </p>
        <p
          class="c0"
          size="1"
        >
          <x-word
            backgroundcolor="#F00"
            data-testid="word"
            radius="100"
            size="1"
          />
          <x-word
            backgroundcolor="#0F0"
            data-testid="word"
            radius="100"
            size="1"
          />
          <x-word
            backgroundcolor="#00F"
            data-testid="word"
            radius="100"
            size="1"
          />
        </p>
      </div>
    `);
  });

  test('should render the correct number of words', () => {
    const count = 7;
    const { queryAllByTestId } = renderComponent({ count });

    expect(queryAllByTestId('word')).toHaveLength(count);
  });

  test('should render the correct number of words when even', () => {
    const count = 8;
    const { queryAllByTestId } = renderComponent({ count });

    expect(queryAllByTestId('word')).toHaveLength(count);
  });
});
