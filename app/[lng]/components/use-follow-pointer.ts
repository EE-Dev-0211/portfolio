import { useState, RefObject, useEffect } from "react";

export function useFollowPointer(
  myRef: RefObject<HTMLElement>,
  isGameActive: boolean
) {
  const [point, setPoint] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!myRef.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = myRef.current!;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    if (isGameActive) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isGameActive, myRef]);

  return point;
}
