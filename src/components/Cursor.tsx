import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

import { AiOutlineAim } from "react-icons/ai";

import styles from "../styles/Cursor.module.css";

const Cursor = ({ isOverMenu }: { isOverMenu: boolean }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClickedDown, setIsClickedDown] = useState(false);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setIsClickedDown(true);
    };

    const onMouseUp = () => {
      setIsClickedDown(false);
    };

    window.addEventListener("mousemove", onMouseMove);

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    setIsMounted(true);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);

      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return isMounted
    ? createPortal(
        <div
          className={styles.cursor}
          style={{
            top: position.y,
            left: position.x,
            display: isOverMenu ? "none" : "block",
          }}
        >
          <AiOutlineAim size={isClickedDown ? 24 : 28} />
        </div>,
        document.getElementById("mouse-container") as HTMLDivElement
      )
    : null;
};

export default Cursor;
