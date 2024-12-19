import designTokens from "@daikin-oss/dds-tokens/json/daikin/Light/tokens.json" with { type: "json" };
import plugin from "tailwindcss/plugin";
import {
  unifyTokenType,
  type SDTokenType,
  type TSTokenType,
  type UnifiedTokenType,
} from "./tokenTypes";

function createPerTypeTokenMap(
  keyPrefix: string,
  cssVarPrefix: string
): Partial<Record<UnifiedTokenType, Record<string, string>>> {
  return Object.entries(designTokens).reduce<
    Partial<Record<UnifiedTokenType, Partial<Record<string, string>>>>
  >((acc, [key, [value, sdType, tsType]]) => {
    const unifiedType = unifyTokenType(
      sdType as SDTokenType,
      tsType as TSTokenType | null
    );
    const object = (acc[unifiedType] ??= {});
    const varRef = `var(${cssVarPrefix}${key})`;
    const comment = value ? ` /* ${value} */` : "";
    object[`${keyPrefix}${key}`] = `${varRef}${comment}`;
    return acc;
  }, {}) as Partial<Record<UnifiedTokenType, Record<string, string>>>;
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
          spacing: {
            ...perTypeTokenMap.dimension,
            ...perTypeTokenMap.spacing,
            ...perTypeTokenMap.sizing,
          },
          borderRadius: perTypeTokenMap.borderRadius,
          borderWidth: perTypeTokenMap.borderWidth,
        },
      },
    };
  }
);

export default tokensPlugin;
