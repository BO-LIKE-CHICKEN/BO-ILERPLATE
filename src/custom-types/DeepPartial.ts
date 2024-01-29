/**
 * @description 객체의 모든 프로퍼티를 Partial 타입으로(옵셔널)하게 만들고 싶을때 유용합니다.
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
