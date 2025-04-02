import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { toolSelection } from "libs/data";

function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem("BSS-Theme") === "dark" ? true : false
  );
  const [dropdownCheck, setDropdownCheck] = useState(false);

  const changeTheme = (selection: boolean) => {
    if (selection) {
      localStorage.setItem("BSS-Theme", "dark");
    } else {
      localStorage.setItem("BSS-Theme", "light");
    }
    setTheme((current) => !current);
  };

  return (
    <div>
      <div className={theme ? "header-parent dark-background" : "header-parent light-background"}>
        <div className="header-links">
          <a href="https://test-beeswarmtools.netlify.app/" className={theme ? "dark-font" : "light-font"}>Home</a>
          <a href="https://www.roblox.com/games/15303115945/a#!/store" target="_blank" className={theme ? "dark-font" : "light-font"}>Donate Me</a>
          <a href="https://beeswarmtools.netlify.app/" className={theme ? "dark-font" : "light-font"}>Normal Mode</a>
        </div>
        <div className={theme ? "header-message dark-font" : "header-message light-font"}>This website is mainly for testing purposes, before the official release in the main website</div></div>
    <div>
      <div
        className="main-parent-container"
        style={{
          backgroundColor: theme ? "rgb(29, 54, 62)" : "rgb(152, 203, 223)",
        }}
      >
        <div
          className={
            dropdownCheck
              ? theme
                ? "dropdown-menu visible dark-info"
                : "dropdown-menu visible"
              : theme
              ? "dropdown-menu dark-info"
              : "dropdown-menu"
          }
        >
          <Link to="/">
            <span />
          </Link>
          <Link to="/hive-planner">
            <span />
          </Link>
          <Link to="/recipe-calculator">
            <span />
          </Link>
          <Link to="/bond-calculator">
            <span />
          </Link>
          <div
            className={
              dropdownCheck
                ? theme
                  ? "dropdown-menu-close dark-font"
                  : "dropdown-menu-close"
                : "hidden"
            }
            onClick={() => setDropdownCheck(false)}
          >
            ✕
          </div>
        </div>
        <div
          className={dropdownCheck ? "dropdown-menu-blur" : ""}
          onClick={() => setDropdownCheck(false)}
        />
        <div
          className={
            theme ? "main-container dark-background" : "main-container"
          }
        >
          <div className="main-title-container">
            <div
              className={theme ? "dark-menu" : "light-menu"}
              onClick={() => setDropdownCheck(true)}
            />
            <div className={theme ? "main-title dark-font" : "main-title"} />
            <div
              onClick={() => changeTheme(!theme)}
              className={theme ? "dark" : "light"}
            />
          </div>
          <div className={theme ? "main-subtitle dark-font" : "main-subtitle"}>
            Tools to help you while you are playing Bee Swarm Simulator
          </div>
          <div
            className={theme ? "main-items-container" : "main-items-container"}
          >
            {
              <div
                className={
                  theme ? "main-description dark-info" : "main-description"
                }
              >
                To get started, select the tool you want to use from the
                selection below or use the navigation menu in the top left.
              </div>
            }
          </div>
          <div className="test">
            <div className="main-tool-container">
              {toolSelection.map((item, index) => {
                return (
                  <Link
                    to={item.path}
                    key={index}
                    className="main-tool-selection"
                  >
                    <div
                      className={
                        theme ? "main-tool-title" : "main-tool-title light-font"
                      }
                    >
                      {item.name}
                    </div>
                    <img
                      className="main-tool-img"
                      src={require(`images/${item.img}`)}
                      alt={item.name}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
