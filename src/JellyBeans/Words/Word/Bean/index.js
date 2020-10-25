import styled from 'styled-components/macro';
import { read, toName } from '../../../../utils/cssVariable';

const Name = {
  COLOR: toName('color'),
  RADIUS: toName('radius'),
  SIZE: toName('size'),
};

const Read = {
  COLOR: read('color'),
  RADIUS: read('radius'),
  SIZE: read('size'),
};

const radius = ({ radius }) => radius;
const size = ({ size }) => size;

const Bean = styled.span`
  ${Name.COLOR}: ${({ color }) => color};
  ${Name.RADIUS}: ${({ radius }) => radius};
  ${Name.SIZE}: ${({ size }) => size};

  border-radius: calc((${radius} / 100) * 0.5 * ${size} * 1rem);
  background-color: ${Read.COLOR};
  color: ${Read.COLOR};
  display: inline;
  font-family: monospace;
  font-size: calc(${Read.SIZE} * 1rem);
  margin-inline-end: calc(${Read.SIZE} * 0.25rem);
  margin-block-start: calc(${Read.SIZE} * 0.25rem);
  max-width: 100%;
  overflow-x: hidden;
  width: auto;
`;

export { Bean };
