import { BsFillMouse2Fill } from "react-icons/bs";
import { TiKeyboard } from "react-icons/ti";

import styles from "../styles/StartScreen.module.css";

const StartScreen = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className={styles.startscreen} onClick={onClick}>
      <h1>Physics Playground</h1>
      <h2>Made by Adam Turaj</h2>
      <div>
        <p>
          <BsFillMouse2Fill /> Left click to shoot a bullet
        </p>
        <p>
          <BsFillMouse2Fill /> Right click to spawn a shape
        </p>
        <p>
          <TiKeyboard /> Press "1" to spawn a circle
        </p>
        <p>
          <TiKeyboard /> Press "2" to spawn a box
        </p>
        <p>
          <TiKeyboard /> Press "r" to reset the simulation
        </p>
      </div>
      <h3>Click anywhere to start</h3>
    </div>
  );
};

export default StartScreen;
