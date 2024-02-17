/**
 * @description
 * 문자열에서 콤마(,)를 제거합니다.
 * @param  value - 콤마를 제거하고자 하는 문자열입니다.
 * @returns  콤마가 제거된 문자열을 반환합니다.
 */
const removeComma = (value: string): string => {
  return value.replace(/,/g, "");
};

export default removeComma;
