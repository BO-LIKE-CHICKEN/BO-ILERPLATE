/**
 * @description
 * 배열 내에서 주어진 원시 값을 토글하는 함수입니다.
 * 이 함수는 주어진 항목이 배열에 이미 존재한다면 해당 항목을 제거하고,
 * 존재하지 않는다면 추가합니다.
 * 이 함수는 객체(Object)를 제대로 비교할 수 없으므로, 원시 값에 대해서만 사용해야 합니다.
 *
 * @example
 * ```
 * const numbers = [1, 2, 3];
 * const updatedNumbers = toggleItemInArray(numbers, 2); // [1, 3]
 * const updatedNumbers2 = toggleItemInArray(numbers, 4); // [1, 2, 3, 4]
 * ```
 */
export const toggleItemInArray = <T extends number | string | boolean | bigint>(
  array: T[],
  item: T
): T[] => {
  return array.includes(item)
    ? array.filter((currentItem) => currentItem !== item)
    : [...array, item];
};
