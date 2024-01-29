/**
 * @description 객체의 모든 프로퍼티를 Partial 타입으로(옵셔널)하게 만들고 싶을때 유용합니다.
 * 
 * @note
 * `DeepPartial<T>`는 `T` 내의 함수 타입 및 생성자 함수 타입을 그대로 유지합니다.
 * 이는 선택적으로 만들지 않음으로써, 객체 구조 내의 함수들의 무결성과 예상되는 동작을 보존하기 위함입니다.
 * @example
 * ```
 * 
type Example = {
  simple: number;
  complex: {
    nested: string;
    array: number[];
  };
};

type DeepPartialExample = DeepPartial<Example>;
// {
//   simple?: number | undefined;
//   complex?: {
//     nested?: string | undefined;
//     array?: number[] | undefined;
//   } | undefined;
// }
 * ```
 */
type DeepPartial<T> = T extends Function | (new (...args: any) => any)
  ? T
  : T extends object
  ? { [P in keyof T]?: DeepPartial<T[P]> }
  : T;
