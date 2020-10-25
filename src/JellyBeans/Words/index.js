import { arrayOf, bool, number, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { emptyArray } from '../../utils/emptyArray';
import { Paragraph } from './Paragraph';
import { Word } from './Word';

const Words = ({
  count,
  lengths,
  isCentered,
  palette,
  paragraphs,
  radius,
  size,
}) => {
  const groupSize = parseInt(`${count / paragraphs}`, 10);
  const remainder = count - groupSize * paragraphs;
  const [paragraphArray, setParagraphArray] = useState(emptyArray(paragraphs));
  const [groupArray, setGroupArray] = useState(emptyArray(groupSize));

  useEffect(() => setParagraphArray(emptyArray(paragraphs)), [paragraphs]);
  useEffect(() => setGroupArray(emptyArray(groupSize)), [groupSize]);

  return (
    <>
      {paragraphArray.map((_, paragraphIndex) => (
        <Paragraph
          isCentered={isCentered}
          key={`p${paragraphIndex}`}
          size={size}
        >
          {groupArray.map((_, wordIndex) => (
            <Word
              backgroundColor={palette[wordIndex % palette.length]}
              key={`p${paragraphIndex}-w${wordIndex}`}
              length={lengths ? lengths[wordIndex % lengths.length] : undefined}
              radius={radius}
              size={size}
            />
          ))}
          {paragraphIndex < remainder && (
            <Word
              backgroundColor={palette[groupSize % palette.length]}
              key={`p${paragraphIndex}-w${groupSize}`}
              length={lengths ? lengths[groupSize % lengths.length] : undefined}
              radius={radius}
              size={size}
            />
          )}
        </Paragraph>
      ))}
    </>
  );
};

Words.protoTypes = {
  count: number.isRequired,
  lengths: arrayOf(number.isRequired),
  isCentered: bool,
  palette: arrayOf(string.isRequired).isRequired,
  paragraphs: number.isRequired,
  radius: number.isRequired,
  size: number.isRequired,
};

Words.defaultProps = {
  lengths: undefined,
};

export { Words };
