import * as CSS from 'csstype';

export type MakeStylesCSSValue = string | 0;

type MakeStylesCSSProperties = Omit<
  CSS.Properties<MakeStylesCSSValue>,
  // We have custom definition for "animationName"
  'animationName'
>;

export type MakeStylesStrictCSSObject = MakeStylesCSSProperties &
  MakeStylesCSSPseudos & { animationName?: MakeStylesAnimation | MakeStylesAnimation[] | CSS.AnimationProperty };

type MakeStylesCSSPseudos = {
  [Property in CSS.Pseudos]?:
    | (MakeStylesStrictCSSObject & { content?: string })
    | (MakeStylesCSSObjectCustomL1 & { content?: string });
};

//
// "MakeStylesCSSObjectCustom*" is a workaround to avoid circular references in types that are breaking TS <4.
// Once we will support "typesVersions" (types downleleving) or update our requirements for TS this should be
// updated or removed.
//

type MakeStylesCSSObjectCustomL1 = {
  [Property: string]: MakeStylesCSSValue | undefined | MakeStylesCSSObjectCustomL2;
} & MakeStylesStrictCSSObject;
type MakeStylesCSSObjectCustomL2 = {
  [Property: string]: MakeStylesCSSValue | undefined | MakeStylesCSSObjectCustomL3;
} & MakeStylesStrictCSSObject;
type MakeStylesCSSObjectCustomL3 = {
  [Property: string]: MakeStylesCSSValue | undefined | MakeStylesCSSObjectCustomL4;
} & MakeStylesStrictCSSObject;
type MakeStylesCSSObjectCustomL4 = {
  [Property: string]: MakeStylesCSSValue | undefined | MakeStylesCSSObjectCustomL5;
} & MakeStylesStrictCSSObject;
type MakeStylesCSSObjectCustomL5 = {
  [Property: string]: MakeStylesCSSValue | undefined;
} & MakeStylesStrictCSSObject;

export type MakeStylesAnimation = Record<'from' | 'to' | string, MakeStylesCSSObjectCustomL1>;
export type MakeStylesStyle = MakeStylesStrictCSSObject | MakeStylesCSSObjectCustomL1;

export type MakeStylesStyleFunctionRule<Tokens> = (tokens: Tokens) => MakeStylesStyle;
export type MakeStylesStyleRule<Tokens> = MakeStylesStyle | MakeStylesStyleFunctionRule<Tokens>;

export type SequenceHash = string;
export type PropertyHash = string;
