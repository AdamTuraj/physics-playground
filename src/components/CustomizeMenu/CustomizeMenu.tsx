import { useState } from "react";

import Settings from "./Settings";

import styles from "../../styles/Settings.module.css";

const CustomizeMenu = ({
  setIsOver,
  updateSetting,
}: {
  setIsOver: (value: boolean) => void;
  updateSetting: (setting: string, value: string) => void;
}) => {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsOver(true)}
      onMouseLeave={() => setIsOver(false)}
      data-open={settingsOpen}
    >
      <h3 onClick={() => setSettingsOpen((prev) => !prev)}>Settings</h3>
      {settingsOpen && <Settings updateSetting={updateSetting} />}
    </div>
  );
};

export default CustomizeMenu;
