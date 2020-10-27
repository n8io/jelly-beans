// eslint-disable-next-line import/no-extraneous-dependencies
import { bool, number } from 'prop-types';
import React from 'react';

const baseStyles = {
  marginBlockEnd: '0',
};

const Paragraph = ({ isCentered, size, ...props }) => {
  const styles = {
    ...baseStyles,
    lineHeight: `${size * 1.5}rem`,
    marginBlockStart: `${size * 1.5}rem`,
    textAlign: isCentered ? 'center' : 'start',
  };

  return <p {...props} style={styles} />;
};

Paragraph.propTypes = {
  isCentered: bool,
  size: number,
};

Paragraph.defaultProps = {
  isCentered: false,
  size: 1,
};;

export { Paragraph };
