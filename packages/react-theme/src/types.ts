/**
 * Design tokens for alias colors
 */
export type ColorTokens = {
  colorNeutralForeground1: string;
  colorNeutralForeground2: string;
  colorNeutralForeground3: string;
  colorNeutralForeground4: string;
};

export type ColorPaletteDarkRed = 'colorPaletteDarkRedBackground1';

export type ColorPaletteBurgundy = 'colorPaletteBurgundyBackground1';

export type ColorPaletteCranberry = 'colorPaletteCranberryBackground1';

export type ColorPaletteRed = 'colorPaletteRedBackground1';

export type ColorPaletteDarkOrange = 'colorPaletteDarkOrangeBackground1';

export type ColorPaletteBronze = 'colorPaletteBronzeBackground1';

export type ColorPalettePumpkin = 'colorPalettePumpkinBackground1';

export type ColorPaletteOrange = 'colorPaletteOrangeBackground1';

export type ColorPalettePeach = 'colorPalettePeachBackground1';

export type ColorPaletteMarigold = 'colorPaletteMarigoldBackground1';

export type ColorPaletteYellow = 'colorPaletteYellowBackground1';

export type ColorPaletteGold = 'colorPaletteGoldBackground1';

export type ColorPaletteBrass = 'colorPaletteBrassBackground1';

export type ColorPaletteBrown = 'colorPaletteBrownBackground1';

export type ColorPaletteDarkBrown = 'colorPaletteDarkBrownBackground1';

export type ColorPaletteLime = 'colorPaletteLimeBackground1';

export type ColorPaletteForest = 'colorPaletteForestBackground1';

export type ColorPaletteSeafoam = 'colorPaletteSeafoamBackground1';

export type ColorPaletteLightGreen = 'colorPaletteLightGreenBackground1';

export type ColorPaletteGreen = 'colorPaletteGreenBackground1';

export type ColorPaletteDarkGreen = 'colorPaletteDarkGreenBackground1';

export type ColorPaletteLightTeal = 'colorPaletteLightTealBackground1';

export type ColorPaletteTeal = 'colorPaletteTealBackground1';

export type ColorPaletteDarkTeal = 'colorPaletteDarkTealBackground1';

export type ColorPaletteCyan = 'colorPaletteCyanBackground1';

export type ColorPaletteSteel = 'colorPaletteSteelBackground1';

export type ColorPaletteLightBlue = 'colorPaletteLightBlueBackground1';

export type ColorPaletteBlue = 'colorPaletteBlueBackground1';

export type ColorPaletteRoyalBlue = 'colorPaletteRoyalBlueBackground1';

export type ColorPaletteDarkBlue = 'colorPaletteDarkBlueBackground1';

export type ColorPaletteCornflower = 'colorPaletteCornflowerBackground1';

export type ColorPaletteNavy = 'colorPaletteNavyBackground1';

export type ColorPaletteLavender = 'colorPaletteLavenderBackground1';

export type ColorPalettePurple = 'colorPalettePurpleBackground1';

export type ColorPaletteDarkPurple = 'colorPaletteDarkPurpleBackground1';

export type ColorPaletteOrchid = 'colorPaletteOrchidBackground1';

export type ColorPaletteGrape = 'colorPaletteGrapeBackground1';

export type ColorPaletteBerry = 'colorPaletteBerryBackground1';

export type ColorPaletteLilac = 'colorPaletteLilacBackground1';

export type ColorPalettePink = 'colorPalettePinkBackground1';

export type ColorPaletteHotPink = 'colorPaletteHotPinkBackground1';

export type ColorPaletteMagenta = 'colorPaletteMagentaBackground1';

export type ColorPalettePlum = 'colorPalettePlumBackground1';

export type ColorPaletteBeige = 'colorPaletteBeigeBackground1';

export type ColorPaletteMink = 'colorPaletteMinkBackground1';

export type ColorPaletteSilver = 'colorPaletteSilverBackground1';

export type ColorPalettePlatinum = 'colorPalettePlatinumBackground1';

export type ColorPaletteAnchor = 'colorPaletteAnchorBackground1';

export type ColorPaletteCharcoal = 'colorPaletteCharcoalBackground1';

export type ColorPaletteTokens = Record<
  | ColorPaletteDarkRed
  | ColorPaletteBurgundy
  | ColorPaletteCranberry
  | ColorPaletteRed
  | ColorPaletteDarkOrange
  | ColorPaletteBronze
  | ColorPalettePumpkin
  | ColorPaletteOrange
  | ColorPalettePeach
  | ColorPaletteMarigold
  | ColorPaletteYellow
  | ColorPaletteGold
  | ColorPaletteBrass
  | ColorPaletteBrown
  | ColorPaletteDarkBrown
  | ColorPaletteLime
  | ColorPaletteForest
  | ColorPaletteSeafoam
  | ColorPaletteLightGreen
  | ColorPaletteGreen
  | ColorPaletteDarkGreen
  | ColorPaletteLightTeal
  | ColorPaletteTeal
  | ColorPaletteDarkTeal
  | ColorPaletteCyan
  | ColorPaletteSteel
  | ColorPaletteLightBlue
  | ColorPaletteBlue
  | ColorPaletteRoyalBlue
  | ColorPaletteDarkBlue
  | ColorPaletteCornflower
  | ColorPaletteNavy
  | ColorPaletteLavender
  | ColorPalettePurple
  | ColorPaletteDarkPurple
  | ColorPaletteOrchid
  | ColorPaletteGrape
  | ColorPaletteBerry
  | ColorPaletteLilac
  | ColorPalettePink
  | ColorPaletteHotPink
  | ColorPaletteMagenta
  | ColorPalettePlum
  | ColorPaletteBeige
  | ColorPaletteMink
  | ColorPaletteSilver
  | ColorPalettePlatinum
  | ColorPaletteAnchor
  | ColorPaletteCharcoal,
  string
>;

/**
 * Possible color variant values
 */
export type ColorVariants = {
  shade50: string;
  shade40: string;
  shade30: string;
  shade20: string;
  shade10: string;
  primary: string;
  tint10: string;
  tint20: string;
  tint30: string;
  tint40: string;
  tint50: string;
  tint60: string;
};

export type BrandVariants = ColorVariants & { shade60: string };

/**
 * All the global shared colors and their shade/tint variants
 */
export type GlobalSharedColors = {
  darkRed: ColorVariants;
  burgundy: ColorVariants;
  cranberry: ColorVariants;
  red: ColorVariants;
  darkOrange: ColorVariants;
  bronze: ColorVariants;
  pumpkin: ColorVariants;
  orange: ColorVariants;
  peach: ColorVariants;
  marigold: ColorVariants;
  yellow: ColorVariants;
  gold: ColorVariants;
  brass: ColorVariants;
  brown: ColorVariants;
  darkBrown: ColorVariants;
  lime: ColorVariants;
  forest: ColorVariants;
  seafoam: ColorVariants;
  lightGreen: ColorVariants;
  green: ColorVariants;
  darkGreen: ColorVariants;
  lightTeal: ColorVariants;
  teal: ColorVariants;
  darkTeal: ColorVariants;
  cyan: ColorVariants;
  steel: ColorVariants;
  lightBlue: ColorVariants;
  blue: ColorVariants;
  royalBlue: ColorVariants;
  darkBlue: ColorVariants;
  cornflower: ColorVariants;
  navy: ColorVariants;
  lavender: ColorVariants;
  purple: ColorVariants;
  darkPurple: ColorVariants;
  orchid: ColorVariants;
  grape: ColorVariants;
  berry: ColorVariants;
  lilac: ColorVariants;
  pink: ColorVariants;
  hotPink: ColorVariants;
  magenta: ColorVariants;
  plum: ColorVariants;
  beige: ColorVariants;
  mink: ColorVariants;
  silver: ColorVariants;
  platinum: ColorVariants;
  anchor: ColorVariants;
  charcoal: ColorVariants;
};

export type FontSizeTokens = {
  fontSizeBase100: string;
  fontSizeBase200: string;
  fontSizeBase300: string;
  fontSizeBase400: string;
  fontSizeBase500: string;
  fontSizeBase600: string;

  fontSizeHero700: string;
  fontSizeHero800: string;
  fontSizeHero900: string;
  fontSizeHero1000: string;
};

export type LineHeightTokens = {
  lineHeightBase100: string;
  lineHeightBase200: string;
  lineHeightBase300: string;
  lineHeightBase400: string;
  lineHeightBase500: string;
  lineHeightBase600: string;

  lineHeightHero700: string;
  lineHeightHero800: string;
  lineHeightHero900: string;
  lineHeightHero1000: string;
};

export type FontWeightTokens = {
  fontWeightRegular: number;
  fontWeightMedium: number;
  fontWeightSemibold: number;
};

export type FontFamilyTokens = {
  fontFamilyBase: string;
  fontFamilyMonospace: string;
  fontFamilyNumeric: string;
};

export type TextAlignment =
  | 'inherit'
  | 'initial'
  | 'revert'
  | 'unset'
  | 'center'
  | 'end'
  | 'start'
  | 'justify'
  | 'left'
  | 'match-parent'
  | 'right';

export type TextAlignments = {
  start: TextAlignment;
  center: TextAlignment;
  end: TextAlignment;
  justify: TextAlignment;
};

export type BorderRadiusTokens = {
  borderRadiusNone: string;
  borderRadiusSmall: string;
  borderRadiusMedium: string;
  borderRadiusLarge: string;
  borderRadiusXLarge: string;
  borderRadiusCircular: string;
};

export type StrokeWidthTokens = {
  strokeWidthThin: string;
  strokeWidthThick: string;
  strokeWidthThicker: string;
  strokeWidthThickest: string;
};

/**
 * Design tokens for shadow levels
 */
export type ShadowTokens = {
  shadow2: string;
  shadow4: string;
  shadow8: string;
  shadow16: string;
  shadow28: string;
  shadow64: string;
};

export type ShadowBrandTokens = {
  shadow2Brand: string;
  shadow4Brand: string;
  shadow8Brand: string;
  shadow16Brand: string;
  shadow28Brand: string;
  shadow64Brand: string;
};

export type GhostColorTokens = {
  ghostBackground: string;
  ghostBackgroundHover: string;
  ghostBackgroundPressed: string;
  ghostBackgroundSelected: string;
};

export type TransparentColorTokens = {
  transparentBackground: string;
  transparentBackgroundHover: string;
  transparentBackgroundPressed: string;
  transparentBackgroundSelected: string;
};

export type BackgroundColorTokens = {
  background: string;
  backgroundHover: string;
  backgroundPressed: string;
  backgroundSelected: string;
};

export type BrandColorTokens = {
  brandBackground: string;
  brandBackgroundHover: string;
  brandBackgroundPressed: string;
  brandBackgroundSelected: string;
  brandBackgroundStatic: string;
  // FIXME: the rest is unclear in the spec
};

export type Greys =
  | 0
  | 2
  | 4
  | 6
  | 8
  | 10
  | 12
  | 14
  | 16
  | 18
  | 20
  | 22
  | 24
  | 26
  | 28
  | 30
  | 32
  | 34
  | 36
  | 38
  | 40
  | 42
  | 44
  | 46
  | 48
  | 50
  | 52
  | 54
  | 56
  | 58
  | 60
  | 62
  | 64
  | 66
  | 68
  | 70
  | 72
  | 74
  | 76
  | 78
  | 80
  | 82
  | 84
  | 86
  | 88
  | 90
  | 92
  | 94
  | 96
  | 98
  | 100;

export type AlphaColors = 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;

// TODO: do we want to split theme for better tree shaking? (MUI)
// But will this end up in the bundle at all? It should be used only in makeStyles and should be removed during build
export type Theme = FontSizeTokens &
  LineHeightTokens &
  BorderRadiusTokens &
  StrokeWidthTokens &
  ShadowTokens &
  ShadowBrandTokens &
  FontFamilyTokens &
  FontWeightTokens &
  ColorPaletteTokens &
  ColorTokens;

export type PartialTheme = Partial<Theme>;
