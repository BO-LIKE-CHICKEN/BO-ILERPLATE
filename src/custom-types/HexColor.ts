/**
 * @description 이 타입은 16진수 형태의 색상 코드를 나타냅니다. 예를 들어, `#FFFFFF`는 흰색을 나타냅니다.
 * 이 타입을 사용함으로써, 색상 코드가 올바른 16진수 형식을 따르고 있음을 타입 레벨에서 보장할 수 있습니다.
 * 특히, UI 컴포넌트의 스타일링에 사용되는 색상 코드가 정확한 형식을 갖추고 있어야 할 때 유용합니다.
 *
 * @remarks
 * 이 타입은 문자열 앞에 `#` 기호가 붙은 형태를 가지며, 이후에는 3자리 또는 8자리의 16진수 값이 옵니다.
 * 타입스크립트의 템플릿 리터럴 타입을 사용하여 이러한 형식을 정의합니다.
 * 하지만, 이 타입은 런타임에 색상 코드의 형식을 검증하지 않으므로, 잘못된 형식의 색상 코드가 사용되지 않도록
 * 주의가 필요합니다. ex) `isValidHexColor`
 *
 *  @see {@link https://medium.com/@steve.alves2/how-to-type-hex-colors-in-typescript-3c3b9a32baa7 타입을 더 좁히지 않은 이유}
 *
 * @example
 * ```
 * type ButtonColor = HexColor;
 *
 * const primaryButtonColor: ButtonColor = "#FF5733"; // 올바른 형식의 16진수 색상 코드
 *
 * const setButtonColor = (color: HexColor) => {
 *   // 버튼의 배경색을 설정, 색상 코드가 올바른 형식임을 보장
 *   button.style.backgroundColor = color;
 * }
 * ```
 */
export type HexColor = `#${string}`;
