import { useEffect, useState } from "react";

import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";

import CustomizeMenu from "../components/CustomizeMenu";
import StartScreen from "../components/StartScreen";

import Bullet from "../components/Bullet";
import Cursor from "../components/Cursor";
import Plane from "../components/Plane";

import Sphere from "../components/Shapes/Sphere";
import Box from "../components/Shapes/Box";

const Canvas = () => {
  const [isOverMenu, setIsOverMenu] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  const [bullets, setBullets] = useState<JSX.Element[]>([]);
  const [shapes, setShapes] = useState<boolean[]>([]);

  const [gravity, setGravity] = useState(-9.81);
  const [bulletVelocity, setBulletVelocity] = useState(50);
  const [shapeMass, setShapeMass] = useState(1);
  const [shapeColor, setShapeColor] = useState("#00ff00");
  // True: Sphere, False: Box
  const [shapeType, setShapeType] = useState(false);
  const [shapeSize, setShapeSize] = useState(1);

  useEffect(() => {
    let clickDownTimeout: NodeJS.Timeout;
    let clickInterval: NodeJS.Timeout;

    const onClick = () => {
      if (isOverMenu || !hasStarted) return;

      // For some reason there would be duplicate keys if you spam click before and after 5 seconds. This'll make it a less chance of happening
      setBullets((prev) => [
        ...prev,
        <Bullet key={prev.length * Math.random()} velocity={bulletVelocity} />,
      ]);

      setTimeout(() => {
        setBullets((prev) => prev.slice(1));
      }, 5000);
    };

    const onRightClick = (e: MouseEvent) => {
      if (isOverMenu || !hasStarted) return;

      e.preventDefault();
      setShapes((prev) => [...prev, shapeType]);
    };

    const onMouseDown = () => {
      clickDownTimeout = setTimeout(
        () => (clickInterval = setInterval(onClick, 100)),
        500
      );
    };

    const onReset = () => {
      clearTimeout(clickDownTimeout);
      clearInterval(clickInterval);

      setBullets([]);
      setShapes([]);
    };

    window.addEventListener("click", onClick);
    window.addEventListener("contextmenu", onRightClick);

    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", () => {
      clearTimeout(clickDownTimeout);
      clearInterval(clickInterval);
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "r") onReset();
      else if (e.key === "1") setShapeType(false);
      else if (e.key === "2") setShapeType(true);
    });

    return () => {
      window.removeEventListener("click", onClick);
      window.removeEventListener("contextmenu", onRightClick);

      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", () => {
        clearTimeout(clickDownTimeout);
        clearInterval(clickInterval);
      });

      window.removeEventListener("keydown", (e) => {
        if (e.key === "r") onReset();
        else if (e.key === "1") setShapeType(false);
        else if (e.key === "2") setShapeType(true);
      });
    };
  }, [isOverMenu, hasStarted, bulletVelocity, shapeType]);

  const onClick = () => {
    setIsOverMenu(false);
    setHasStarted(true);
  };

  const updateSetting = (setting: string, value: string) => {
    switch (setting) {
      case "gravity":
        setGravity(+value);
        break;

      case "bulletVelocity":
        setBulletVelocity(+value);
        break;

      case "shapeMass":
        setShapeMass(+value);
        break;

      case "shapeColor":
        setShapeColor(value);
        break;

      case "shapeSize":
        setShapeSize(+value);
        break;

      default:
        break;
    }
  };

  return (
    <>
      <Cursor isOverMenu={isOverMenu} />
      {!hasStarted && <StartScreen onClick={onClick} />}
      <CustomizeMenu setIsOver={setIsOverMenu} updateSetting={updateSetting} />
      <ThreeCanvas style={{ height: "100vh", width: "100vw" }}>
        <color attach="background" args={["white"]} />
        <directionalLight position={[0, 3, 5]} />
        <ambientLight intensity={0.3} />
        <Physics gravity={[0, gravity, 0]}>
          {shapes.map((shape, i) => {
            const props = {
              key: i,
              mass: shapeMass,
              color: shapeColor,
              size: shapeSize,
            };
            return shape ? <Sphere {...props} /> : <Box {...props} />;
          })}
          {bullets}
          <Plane />
        </Physics>
      </ThreeCanvas>
    </>
  );
};

export default Canvas;
