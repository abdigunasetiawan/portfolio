import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorCircle = useRef(null);
  const cursorDot = useRef(null);
  useEffect(() => {
    const handleMouseMove = (e) => {
      const postX = e.clientX;
      const postY = e.clientY;

      if (cursorCircle.current) {
        cursorCircle.current.style.left = `${postX}px`;
        cursorCircle.current.style.top = `${postY}px`;
      }

      if (cursorDot.current) {
        cursorDot.current.animate(
          {
            left: `${postX}px`,
            top: `${postY}px`,
          },
          {
            duration: 500,
            fill: "forwards",
          },
        );
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={cursorCircle} className="cursor-cirlce pointer-events-none fixed left-0 top-0 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-blax-950 lg:block"></div>
      <div ref={cursorDot} className="cursor-dot pointer-events-none fixed left-0 top-0 hidden h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blax-950 lg:block"></div>
    </>
  );
};

export default Cursor;
