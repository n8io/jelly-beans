import React from 'react';
import styled from 'styled-components/macro';
import { ColorVariations, JellyBeans } from '..';

const Container = ({ isDark, ...props }) => {
  const styles = {
    backgroundColor: isDark ? '#222' : '#F2F2F2',
    border: '1px solid #EEE',
    borderRadius: '1rem',
    marginBottom: '1rem',
    padding: '0.5rem',
  };

  return <div {...props} style={styles} />;
};

const Component = (props) => <JellyBeans {...props} />;

const Header = styled.div`
  align-items: end;
  display: grid;
  font-family: monospace;
  font-size: 2rem;
  font-weight: bold;
  grid-auto-flow: column;
  justify-content: start;
  margin-bottom: 1rem;
`;

const Intro = (props) => (
  <>
    <Header>
      Jelly Beans
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: '1rem',
          lineHeight: 1.4,
          marginLeft: '0.5rem',
        }}
      >
        by @n8io
      </span>
    </Header>
    <JellyBeans {...props} />
    <pre>
      A React component to display <strong>visual lorem ipsum</strong>. Instead
      of a blurb of latin text you get a bag of tasty jelly beans 👛 💊 😋.
    </pre>
  </>
);

const defaultArgs = JellyBeans.defaultProps;

const argTypes = {
  colorVariations: {
    control: {
      type: 'select',
      options: ColorVariations,
    },
  },
  isCentered: {
    control: 'boolean',
  },
  isGrayscale: {
    control: 'boolean',
  },
  isRtl: {
    control: 'boolean',
  },
  paragraphs: {
    control: {
      type: 'range',
      min: 1,
      max: 10,
      step: 1,
    },
  },
  size: {
    control: {
      type: 'range',
      min: 0,
      max: 3,
      step: 0.05,
    },
  },
  beanRadius: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 5,
    },
  },
  beans: {
    control: {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
    },
  },
  onPaletteChange: null,
};

export {
  Container,
  ColorVariations,
  Intro,
  Component as JellyBeans,
  argTypes,
  defaultArgs,
};
