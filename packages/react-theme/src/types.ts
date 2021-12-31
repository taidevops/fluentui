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

export type FontFamilyTokens = {
  fontFamilyBase: string;
};

export type Theme = FontSizeTokens & FontFamilyTokens;

export type PartialTheme = Partial<Theme>;
