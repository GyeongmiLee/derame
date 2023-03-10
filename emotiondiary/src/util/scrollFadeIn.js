import { useRef, useCallback, useEffect } from "react";

export const useScrollFadeIn = (direction, duration, delay) => {
  //해당 컴포넌트 가져오기
  const element = useRef();
  //direction선택
  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translatd3d(0,50%,0)";
      case "down":
        return "translatd3d(0,-50%,0)";
      case "left":
        return "translatd3d(200%,0,0)";
      case "right":
        return "translatd3d(-200%,0,0)";
      default:
        return;
    }
  };
  //설정해둔 컴포넌트 만날때마다 함수 재 실행되도록 callback하기
  const onScroll = useCallback(
    ([entry]) => {
      const { current } = element;
      if (entry.isIntersecting) {
        current.style.tansitionProperty = "all";
        current.style.transitionDuration = `${duration}s`;
        current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
        current.style.opacity = 1;
        current.style.tranform = "translate3d(0, 0, 0)";
      }
    },
    [delay, duration]
  );

  //intersection-observer로 컴포넌트 위치 확인
  useEffect(() => {
    let observer;
    if (element.current) {
      observer = new IntersectionObserver(onScroll, { threshold: 0.7 });
      observer.observe(element.current);
    }
    return () => observer && observer.disconnect();
  }, [onScroll]);
  return {
    ref: element,
    style: { opacity: 0, transform: handleDirection(direction) },
  };
};
