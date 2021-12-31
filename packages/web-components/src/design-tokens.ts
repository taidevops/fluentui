import { DesignToken } from '@microsoft/fast-foundation';
import { Direction } from '@microsoft/fast-web-utilities';

const { create } = DesignToken;

// General tokens

/** @public */
export const direction = create<Direction>('direction').withDefault(Direction.ltr);
/** @public */
export const disabledOpacity = create<number>('disabled-opacity').withDefault(0.3);

// Density tokens

/** @public */
export const baseHeightMultiplier = create<number>('base-height-multiplier').withDefault(8);

// Typography values

/** @public */
export const bodyFont = create<string>('body-font').withDefault('Segoe UI, sans-serif');
/** @public */
export const typeRampBaseFontSize = create<string>('type-ramp-base-font-size').withDefault('14px');
