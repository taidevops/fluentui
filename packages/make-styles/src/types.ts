import { Properties as CSSProperties } from 'csstype';

export interface MakeStyles extends Omit<CSSProperties, 'animationName'> {
  // TODO Questionable: how else would users target their own children?
  [key: string]: any; // eslint-disable-line @typescript-eslint/no-explicit-any

  animationName?: object | string;
}

