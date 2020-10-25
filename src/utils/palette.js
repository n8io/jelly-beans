import randomColor from 'randomcolor';
import { emptyArray } from './emptyArray';

const generate = count => emptyArray(count).map(() => randomColor());

export { generate };
