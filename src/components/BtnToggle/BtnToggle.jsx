import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

export default function BtnToggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);

  return (
    <div
      onClick={toggleTheme}
      className={theme ? "btnToggle goLight" : "btnToggle goDark"}
    >
      {theme ? "Dark" : "Light"}
    </div>
  );
}