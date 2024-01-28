/**
 * @description 특정 타입으로 이루어진 배열이지만 빈 배열을 제외하고 싶을때 유용합니다.
 *
 * 특히 이 타입은 서버에 데이터를 보낼 때 빈 배열이 아닌 것을 보장하는 데에 유용하게 사용될 수 있습니다.
 *
 * @example
 * ```
 * type Cart = NonEmptyArray<CartItem>;
 *
 * const submitCart = (cart: Cart) => {
 *   // 카트에 하나 이상의 상품이 있음을 보장하고 서버에 전송
 *   sendToServer(cart);
 * }
 * ```
 */
export type NonEmptyArray<T> = T[] & { 0: T };
