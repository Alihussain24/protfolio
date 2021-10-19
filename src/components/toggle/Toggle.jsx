import React, { useContext } from "react";
import "./toggle.css";
import Sun from "../../img/fullSiteImg/sun.png";
import Moon from "../../img/fullSiteImg/moon.png";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img
        onClick={handleClick}
        style={{ right: theme.state.darkMode ? 0 : 25 }}
        src={Sun}
        alt=""
        className="t-icon"
      />
      <img
        onClick={handleClick}
        style={{ right: theme.state.darkMode ? 0 : 25 }}
        src={Moon}
        alt=""
        className="t-icon"
      />
      <div
        className="t-button"
        onClick={handleClick}
        style={{ right: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;
