import styled from 'styled-components/macro';
import { read, toName } from '../../utils/cssVariable';

const Name = {
  GRAYSCALE: toName('grayscale'),
  RTL: toName('rtl'),
};

const Read = {
  GRAYSCALE: read('grayscale'),
  RTL: read('rtl'),
};

const Container = styled.div`
  ${Name.GRAYSCALE}: ${({ isGrayscale }) => (isGrayscale ? 100 : 0)};
  ${Name.RTL}: ${({ isRtl }) => (isRtl ? 'rtl' : 'inherit')};

  direction: ${Read.RTL};
  display: inline-block;
  filter: grayscale(calc(${Read.GRAYSCALE} * 1%));
  height: 100%;
  overflow-x: hidden;
  user-select: none;
  width: 100%;
`;

export { Container };
