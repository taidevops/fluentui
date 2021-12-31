export interface CompileCSSOptions {
  className: string;
}

const PSEUDO_SELECTOR_REGEX = /,( *[^ &])/g;
