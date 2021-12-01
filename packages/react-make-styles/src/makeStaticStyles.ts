import { makeStaticStyles as vanillaMakeStaticStyles } from '@tai-ui/make-styles';

import { useRenderer } from './RendererContext';
import type { MakeStaticStyles, MakeStaticStylesOptions } from '@tai-ui/make-styles';

export function makeStaticStyles<Selectors>(styles: MakeStaticStyles | MakeStaticStyles[]) {
  const getStyles = vanillaMakeStaticStyles(styles);

  if (process.env.NODE_ENV === 'test') {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    return () => {};
  }

  return function useStaticStyles(): void {
    const renderer = useRenderer();
    const options: MakeStaticStylesOptions = { renderer };

    return getStyles(options);
  };
}
