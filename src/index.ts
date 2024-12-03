import plugin from "tailwindcss/plugin";
import designTokens from "./design-tokens.json" with { type: "json" };

type TokenType =
  | "border"
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "shadow"
  | "typography";

function createPerTypeTokenMap(
  keyPrefix: string,
  cssVarPrefix: string
): Partial<Record<TokenType, Record<string, string>>> {
  return Object.entries(designTokens).reduce<
    Partial<Record<TokenType, Partial<Record<string, string>>>>
  >((acc, [key, [value, type]]) => {
    const object = (acc[type as TokenType] ??= {});
    object[`${keyPrefix}${key}`] = `var(${cssVarPrefix}${key}) /* ${value} */`;
    return acc;
  }, {}) as Partial<Record<TokenType, Record<string, string>>>;
}

const DEFAULT_OPTIONS = {
  prefix: "ddt",
  cssVarPrefix: "dds",
} as const;

const tokensPlugin = plugin.withOptions<
  | {
      prefix?: string | undefined;
      cssVarPrefix?: string | undefined;
    }
  | undefined
>(
  (options) =>
    // eslint-disable-next-line @typescript-eslint/unbound-method
    ({ addUtilities }) => {
      const { prefix, cssVarPrefix } = { ...DEFAULT_OPTIONS, ...options };
      const perTypeTokenMap = createPerTypeTokenMap(prefix, cssVarPrefix);

      // Add `b-ddt-*` and `o-ddt-*`.
      addUtilities(
        Object.entries(perTypeTokenMap.border ?? {}).map(
          ([key, value]): Record<string, Record<string, string>> => ({
            [`.b-${key}`]: {
              border: value,
            },
            [`.bl-${key}`]: {
              "border-left": value,
            },
            [`.br-${key}`]: {
              "border-right": value,
            },
            [`.bt-${key}`]: {
              "border-top": value,
            },
            [`.bb-${key}`]: {
              "border-bottom": value,
            },
            [`.bx-${key}`]: {
              "border-left": value,
              "border-right": value,
            },
            [`.by-${key}`]: {
              "border-top": value,
              "border-bottom": value,
            },
            [`.o-${key}`]: {
              outline: value,
            },
          })
        )
      );

      // Add `type-ddt-*`.
      addUtilities(
        Object.entries(perTypeTokenMap.typography ?? {}).map(
          ([key, value]): Record<string, Record<string, string>> => ({
            [`.type-${key}`]: {
              font: value,
            },
          })
        )
      );
    },
  (options) => {
    const { prefix, cssVarPrefix } = { ...DEFAULT_OPTIONS, ...options };
    const perTypeTokenMap = createPerTypeTokenMap(prefix, cssVarPrefix);

    return {
      theme: {
        extend: {
          colors: perTypeTokenMap.color,
          boxShadow: perTypeTokenMap.shadow,
          fontFamily: {
            ...perTypeTokenMap.fontFamily,
            // TODO: This is kept for compatibility reasons. We should migrate to design token.
            daikinSerif: "Roboto, sans-serif",
          },
          fontSize: perTypeTokenMap.fontSize,
          fontWeight: perTypeTokenMap.fontWeight,
          lineHeight: perTypeTokenMap.lineHeight,
          spacing: perTypeTokenMap.dimension,
        },
      },
    };
  }
);

export default tokensPlugin;
