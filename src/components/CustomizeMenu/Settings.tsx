import ReactTooltip from "react-tooltip";

import styles from "../../styles/Settings.module.css";
import Setting from "./Setting";

const settings = [
  {
    label: "Gravity",
    id: "gravity",
    type: "number",
    tooltip:
      "Sets the gravity of the simulation. Positive values will make the shapes go upwards. (Default: -9.8)",
    defaultValue: -9.8,
    step: 0.1,
  },
  {
    label: "Bullet Velocity",
    id: "bulletVelocity",
    type: "number",
    tooltip: "Sets the initial velocity of the bullet. (Default: 50)",
    defaultValue: 50,
    step: 1,
  },
  {
    label: "Shape Mass",
    id: "shapeMass",
    type: "number",
    tooltip:
      "Sets the mass of the shape. The higher the mass the harder the value is, the less push the bullets will do. (Default: 1)",
    defaultValue: 1,
    step: 0.1,
  },
  {
    label: "Shape Size",
    id: "shapeSize",
    type: "number",
    tooltip: "Sets the size of the shape. (Default: 1)",
    defaultValue: 1,
    step: 0.1,
  },
  {
    label: "Shape Color",
    id: "shapeColor",
    type: "color",
    tooltip: "Sets the color of the shape. (Default: Green #00ff00)",
    defaultValue: "#00ff00",
  },
];

const Settings = ({
  updateSetting,
}: {
  updateSetting: (setting: string, value: string) => void;
}) => {
  return (
    <div className={styles.settings}>
      {settings.map((setting) => (
        <Setting key={setting.id} {...setting} updateSetting={updateSetting} />
      ))}
      <ReactTooltip className="tooltip" />
    </div>
  );
};

export default Settings;
