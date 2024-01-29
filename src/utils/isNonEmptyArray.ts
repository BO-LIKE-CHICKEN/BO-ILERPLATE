import { NonEmptyArray } from "../custom-types";

/**
 * @description 주어진 배열이 비어 있지 않은지 확인합니다.
 * 이 함수는 배열이 실제로 배열 타입이며, 그 길이가 0보다 큰지를 검사합니다.
 * 이를 통해 TypeScript 컴파일러가 주어진 배열이 `NonEmptyArray<T>` 타입임을 안전하게 추론할 수 있습니다.
 * 주로 배열에 최소 한 개 이상의 요소가 있는지를 타입 레벨에서 확인할 때 사용됩니다.
 *
 * @typeParam T - 배열 요소의 타입.
 * @param arr - 검사할 배열.
 * @returns 배열이 비어 있지 않으면 `true`, 그렇지 않으면 `false`를 반환합니다.
 *
 * @example
 * ```
 * const numbers = [1, 2, 3];
 * const isEmpty = isNonEmptyArray(numbers); // true
 *
 * const emptyArray = [];
 * const isNotEmpty = isNonEmptyArray(emptyArray); // false
 * ```
 */
export const isNonEmptyArray = <T>(arr: T[]): arr is NonEmptyArray<T> => {
  return Array.isArray(arr) && arr.length > 0;
};
