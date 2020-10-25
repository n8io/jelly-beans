import { Namespace } from '../constants/namespace';

const toName = (name: string) => `--${Namespace.CSS}-${name}`;
const read = (name: string) => `var(${toName(name)})`;
const write = (name: string, value: string) => `${toName(name)}: ${value};`;

export { read, toName, write };
