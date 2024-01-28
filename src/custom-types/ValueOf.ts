/**
 * @description Object의 value로 이루어진 유니온 타입을 만들때 유용합니다. `enum`이 컨벤션에서 배제되는 경우 유용합니다.
 *
 * @example
 * ```
 * const AREA_CODE =  {
 *  'SEOUL': "02",
 *  'GYEONGGI-DO': "031",
 * } as const;
 *
 * type AreaCode = ValueOf<type of AREA_CODE>;
 * // "02" | "031"
 * ```
 *
 */
export type ValueOf<T> = T[keyof T];
