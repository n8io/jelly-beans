// eslint-disable-next-line import/no-extraneous-dependencies
import { bool } from 'prop-types';
import React from 'react';

const baseStyles = {
  display: 'inline-block',
  height: '100%',
  overflowX: 'hidden',
  userSelect: 'none',
  width: '100%',
};

const Container = ({ isGrayscale, isRtl, ...props }) => {
  const styles = {
    ...baseStyles,
    direction: isRtl ? 'rtl' : 'inherit',
    filter: isGrayscale ? `grayscale(100%)` : '',
  };

  return <div style={styles} {...props} />;
};

Container.propTypes = {
  isGrayscale: bool,
  isRtl: bool,
};

Container.defaultProps = {
  isGrayscale: false,
  isRtl: false,
};

export { Container };
