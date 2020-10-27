import React from 'react';

const baseStyles = {
  display: 'inline',
  fontFamily: 'monospace',
  maxWidth: '100%',
  overflowX: 'hidden',
  width: 'auto',
};

const Bean = ({ children, color, radius, size }) => {
  const styles = {
    ...baseStyles,
    borderRadius: `${(radius / 100) * 0.5 * size * 1}rem`,
    color,
    backgroundColor: color,
    fontSize: `${size}rem`,
    marginInlineEnd: `${size * 0.25}rem`,
    marginBlockStart: `${size * 0.25}rem`,
  };

  return <span style={styles}>{children}</span>;
};

export { Bean };
