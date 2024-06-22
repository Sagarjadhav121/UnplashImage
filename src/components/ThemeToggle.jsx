import { gloabalContext } from "../utils";
import { FaRegMoon } from "react-icons/fa";
import { GoSun } from "react-icons/go";
const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = gloabalContext();
  return (
    <>
      <div className="toggle-container">
        <button
          className="btn-toggle dark-toggle toggle-icon"
          onClick={toggleDarkTheme}
        >
          <h6 className="title" style={{ marginBottom: "10px" }}>
            {isDarkTheme ? "Day" : "Night"}
          </h6>

          {isDarkTheme ? <GoSun /> : <FaRegMoon />}
        </button>
      </div>
    </>
  );
};

export default ThemeToggle;
