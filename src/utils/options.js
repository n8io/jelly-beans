import { clamp } from './clamp';
import { generate as generatePalette } from './palette';

const PARAGRAPHS_MAX = 100;
const PARAGRAPHS_MIN = 1;
const SIZE_MAX = 10;
const SIZE_MIN = 0.1;
const VARIATIONS_MAX = 20;
const VARIATIONS_MIN = 1;
const WORD_RADIUS_MAX = 100;
const WORD_RADIUS_MIN = 1;

const normalize = ({
  colorVariations,
  paragraphs: tmpParagraphs,
  size: tmpSize,
  wordRadius: tmpWordRadius,
  words,
}) => {
  const count = Array.isArray(words) ? words.length : words;
  const lengths = Array.isArray(words) ? words : [];
  const size = clamp(SIZE_MIN, SIZE_MAX, tmpSize);
  const wordRadius = clamp(WORD_RADIUS_MIN, WORD_RADIUS_MAX, tmpWordRadius);
  const paragraphs = clamp(PARAGRAPHS_MIN, PARAGRAPHS_MAX, tmpParagraphs);
  const colorCount = clamp(VARIATIONS_MIN, VARIATIONS_MAX, colorVariations);

  const palette = Array.isArray(colorVariations)
    ? colorVariations
    : generatePalette(colorCount);

  return {
    count,
    colorCount,
    lengths,
    palette,
    paragraphs,
    size,
    words,
    wordRadius,
  };
};

export { normalize };
