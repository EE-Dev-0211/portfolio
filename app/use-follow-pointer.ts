import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(
  ref: RefObject<HTMLElement>,
  isLoadingScreenFinished: boolean
) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    if (isLoadingScreenFinished) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isLoadingScreenFinished, ref]);

  return point;
}
