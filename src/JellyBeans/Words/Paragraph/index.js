import styled from 'styled-components/macro';
import { read, toName } from '../../../utils/cssVariable';

const Name = {
  SIZE: toName('size'),
};

const Read = {
  SIZE: read('size'),
};

const Paragraph = styled.p`
  ${Name.SIZE}: ${({ size }) => size};

  line-height: calc(${Read.SIZE} * 1.5rem);
  margin-block-end: 0;
  margin-block-start: calc(${Read.SIZE} * 1.5rem);
  text-align: ${({ isCentered }) => (isCentered ? 'center' : 'start')};

  &:first-child {
    margin-block-end: 0;
    margin-block-start: 0;
  }
`;

export { Paragraph };
