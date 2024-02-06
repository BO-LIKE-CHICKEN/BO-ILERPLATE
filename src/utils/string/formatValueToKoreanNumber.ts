/**
 * @description 숫자 형태의 값을 받아와 언어(Ko-KR)와 관련된 표현이 있는 값을 반환합니다. 0에서는 값을 반환하지 않아요.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString MDN}
 * @example 천 단위마다 ','를 찍어줍니다.
 * ```
 * const foo = formatValueToKoreanNumber(1_234_567);
 * // 1,234,567
 * ```
 */
export const formatValueToKoreanNumber = (value: string | number) => {
  if (!value) return "";

  const formattedNumber = Number(value).toLocaleString("ko-KR");

  return `${formattedNumber}`;
};
