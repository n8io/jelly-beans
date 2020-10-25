// eslint-disable-next-line import/no-extraneous-dependencies
import { arrayOf, bool, func, number, oneOfType, string } from 'prop-types';
import React, { useEffect, useState } from 'react';
import { normalize } from '../utils/options';
import { generate as generatePalette } from '../utils/palette';
import { Container } from './Container';
import { Words } from './Words';

const JellyBeans = ({
  colorVariations,
  isCentered: tmpIsCentered,
  isGrayscale: tmpIsGrayscale,
  isRtl: tmpIsRtl,
  onPaletteChange,
  paragraphs: tmpParagraphs,
  size: tmpSize,
  beanRadius,
  beans,
  ...props
}) => {
  const {
    count,
    colorCount,
    lengths,
    palette: initialPalette,
    paragraphs,
    size,
    wordRadius,
  } = normalize({
    colorVariations,
    paragraphs: tmpParagraphs,
    size: tmpSize,
    wordRadius: beanRadius,
    words: beans,
  });

  const isCentered = Boolean(tmpIsCentered);
  const isGrayscale = Boolean(tmpIsGrayscale);
  const isRtl = Boolean(tmpIsRtl);

  const [palette, setPalette] = useState(initialPalette);

  useEffect(() => {
    setPalette(
      Array.isArray(colorVariations)
        ? colorVariations
        : generatePalette(colorCount)
    );
  }, [colorCount, colorVariations]);

  useEffect(() => onPaletteChange(palette), [onPaletteChange, palette]);

  return (
    <Container {...props} isGrayscale={isGrayscale} isRtl={isRtl}>
      <Words
        count={count}
        lengths={lengths}
        isCentered={isCentered}
        palette={palette}
        paragraphs={paragraphs}
        size={size}
        radius={wordRadius}
      />
    </Container>
  );
};

JellyBeans.propTypes = {
  /**
   Either the number of variations or an array of strings. These string can be any css supported color string: E.g., `hex`, `rgba`, `hsl`, etc
  */
  colorVariations: oneOfType([number, arrayOf(string)]),
  /**
   Whether or not the beans should be horizontally centered
  */
  isCentered: bool,
  /**
   Whether or not the beans shoud be gray scaled
  */
  isGrayscale: bool,
  /**
   Whether or not the beans direction is right to left
  */
  isRtl: bool,
  /**
   A function that is called when the color palette changes. Returns `string[]`
  */
  onPaletteChange: func,
  /**
   The number of paragraphs to evenly split the beans over
  */
  paragraphs: number,
  /**
   The relative size of the beans
  */
  size: number,
  /**
   The relative curviness of the beans. From `0` (no rounding) to `1` (full rounding).
  */
  beanRadius: number,
  /**
   The number of beans to show or an array of bean widths.
  */
  beans: oneOfType([number, arrayOf(number)]),
};

JellyBeans.defaultProps = {
  colorVariations: 3,
  isCentered: false,
  isGrayscale: false,
  isRtl: false,
  onPaletteChange: () => undefined,
  paragraphs: 1,
  size: 1,
  beanRadius: 100,
  beans: 25,
};

export { JellyBeans };
