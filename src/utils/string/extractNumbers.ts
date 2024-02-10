/**
 * @description 숫자가 아닌 모든 문자를 제거합니다.
 * @example
 * ```
 * const foo = extractNumbers("1,000만 원");
 * // 1000
 * ```
 */
export const extractNumbers = (value: string) => {
  return value.replace(/[^0-9]/g, "");
};
