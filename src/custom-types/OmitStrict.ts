/**
 *  @description 조금 더 엄격하게 Omit을 사용하고 싶을 때 유용합니다.
 *  @see {@link https://velog.io/@polaris6204/TypeScript-의-Omit-type-은-이상하다 Omit이 엄격하지 않은 이유}
 *  */
export type OmitStrict<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
