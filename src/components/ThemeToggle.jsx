import { gloabalContext } from "../utils";
import { FaRegMoon } from "react-icons/fa";
import { FaMoon } from "react-icons/fa6";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = gloabalContext();
  return (
    <div className="toggle-container">
      <button
        className="btn-toggle dark-toggle toggle-icon"
        onClick={toggleDarkTheme}
      >
        {isDarkTheme ? <FaMoon /> : <FaRegMoon />}
      </button>
    </div>
  );
};

export default ThemeToggle;
