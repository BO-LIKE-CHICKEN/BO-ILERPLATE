/**
 * @description 이 타입은 특정 타입 `T`로 이루어진 배열이지만, 배열이 비어 있지 않음을 보장합니다.
 * 이를 통해 배열이 최소 하나 이상의 요소를 포함하고 있음이 보장됩니다.
 * 특히 서버에 데이터를 보낼 때, 빈 배열이 아닌 것을 보장하는 데 유용하게 사용될 수 있습니다.
 *
 * @remarks
 * 이 타입은 배열의 길이에 대한 명시적인 체크 없이도 배열이 비어 있지 않음을 타입 레벨에서 보장합니다.
 * 하지만, 이 타입은 런타임에 배열의 길이를 검증하지 않습니다. 따라서 런타임에 배열의 길이를
 * 검증하는 추가적인 로직이 필요할 수 있습니다. ex)`isNonEmptyArray`
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
