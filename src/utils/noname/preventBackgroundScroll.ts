/**
 * @description 화면을 덮는 요소들이 있을때, 요소와 상호작용하여도 요소 아래에 있던 스크롤에는 영향이 없도록 합니다.
 */
export const preventBackgroundScroll = {
  /**
   * @description 요소가 화면을 덮을 때 요소 아래에 있던 스크롤을 없앱니다.
   * */
  enable: (body: HTMLBodyElement) => {
    if (typeof window === "undefined") return;

    const scrollPosition = window.scrollY ?? 0;

    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.left = "0";
    body.style.right = "0";
  },
  /**
   * @description 요소가 화면을 덮을 때 요소 아래에 있던 스크롤을 없애 두었다가 돌려줍니다.
   * */
  disable: (body: HTMLBodyElement) => {
    if (typeof window === "undefined") return;

    const scrollPosition = body.style.top
      ? -Number(body.style.top.replace("px", ""))
      : 0;

    ["overflow", "position", "top", "left", "right"].forEach((property) => {
      body.style.removeProperty(property);
    });

    if (scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
  },
};
