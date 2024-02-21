export const preventBackgroundScroll = {
  /**
   * @description 서버사이드에서 실행시 body가 없을 수 있기 때문에 파라미터로 인자를 받아와서 처리합니다.
   * */
  enable: (body: HTMLBodyElement, scrollPosition: number) => {
    if (typeof window === "undefined") return;

    scrollPosition = window.scrollY;
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollPosition}px`;
    body.style.left = "0";
    body.style.right = "0";
  },
  /**
   * @description 서버사이드에서 실행시 body가 없을 수 있기 때문에 파라미터로 인자를 받아와서 처리합니다.
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
