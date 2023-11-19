import { useEffect, useState } from "react";

interface UseBottomPositionProps {
  elementRef: React.RefObject<HTMLElement>;
}

const useBottomPosition = ({ elementRef }: UseBottomPositionProps) => {
  const [bottomPosition, setBottomPosition] = useState<number | null>(null);

  useEffect(() => {
    const measureBottomPosition = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        setBottomPosition(rect.bottom);
      }
    };

    measureBottomPosition();

    window.addEventListener("resize", measureBottomPosition);

    return () => {
      window.removeEventListener("resize", measureBottomPosition);
    };
  }, [elementRef]);

  return bottomPosition;
};

export default useBottomPosition;
