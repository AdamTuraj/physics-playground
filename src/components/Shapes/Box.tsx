import { useBox } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";

const Box = ({
  color,
  mass,
  size,
}: {
  color: string;
  mass: number;
  size: number;
}) => {
  const { mouse, viewport } = useThree();

  const [ref] = useBox(() => ({
    mass: mass,
    position: [
      (mouse.x * viewport.width) / 2,
      (mouse.y * viewport.height) / 2,
      0,
    ],
    args: [size, size, size],
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[size, size, size]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Box;
