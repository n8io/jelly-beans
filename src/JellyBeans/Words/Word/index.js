// eslint-disable-next-line import/no-extraneous-dependencies
import { number, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { niceWordLengths } from '../../../constants/niceWordLengths';
import { emptyArray } from '../../../utils/emptyArray';
import { integer as randomInteger } from '../../../utils/random';
import { Bean } from './Bean';

const BASE_CHARACTER = '·';

const randomWordLength = () =>
  niceWordLengths[randomInteger(0, niceWordLengths.length)];

const Word = ({ backgroundColor, length, radius, size }) => {
  const [letterCount, setLetterCount] = useState(length || randomWordLength());
  const [word] = useState(emptyArray(letterCount).fill(BASE_CHARACTER));

  useEffect(() => {
    setLetterCount(length || randomWordLength());
  }, [length]);

  return (
    <Bean color={backgroundColor} radius={radius} size={size}>
      {word}{' '}
    </Bean>
  );
};

Word.propTypes = {
  backgroundColor: string.isRequired,
  length: number,
  radius: number.isRequired,
  size: number.isRequired,
};

Word.defaultProps = {
  length: undefined,
};

export { Word };
