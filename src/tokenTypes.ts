import type { TokenTypesUnion as TSTokenType } from "@tokens-studio/types";

export type { TSTokenType };

/** Token type of style-dictionary */
export type SDTokenType =
  | "border"
  | "color"
  | "dimension"
  | "fontFamily"
  | "fontSize"
  | "fontWeight"
  | "lineHeight"
  | "shadow"
  | "typography";

export type UnifiedTokenType =
  | SDTokenType
  | "borderRadius"
  | "borderWidth"
  | "spacing"
  | "sizing";

export function unifyTokenType(
  sdType: SDTokenType,
  tsType: TSTokenType | null
): UnifiedTokenType {
  switch (tsType) {
    case "borderWidth":
    case "borderRadius":
    case "sizing":
    case "spacing":
      return tsType;

    default:
      return sdType;
  }
}
