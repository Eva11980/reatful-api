import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeContext, { themes } from "../contexts/ThemeContext";
// theme功能在Navbar

import AuthContext from "../contexts/AuthContext";
// AuthContext 2

import ToggleButton from "./ToggleButton"; //toggle button

export default function Navbar() {
  const location = useLocation();
  // console.log(location.pathname);
  const { name: themeName, setTheme } = useContext(ThemeContext);
  // const { myAuth } = useContext(AuthContext);

  //做logout登出
  const { myAuth, logout } = useContext(AuthContext);
  console.log({ themeName });
  const seg1 = location.pathname.split("/")[1];
  //路徑切縣切掉

  const actives = {};
  // Navbar 修改
  actives[seg1] = {
    backgroundColor: "lightblue",
    borderRadius: "10px",
  };
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Navbar
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* style css 三種樣式 */}
                <Link className="nav-link" style={actives.list} to="/list">
                  AB-list
                </Link>
              </li>

              <li className="nav-item">
              {/* 授權發送AJAX */}
              <Link className="nav-link" style={actives['list-auth']} to="/list-auth">
                  AB-list-auth
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={actives.tmp} to="/tmp">
                  tmp
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              {myAuth.authorised ? (
                <>
                  {/* Navbar狀態更改登入 */}
                  <li className="nav-item">
                    <a className="nav-link" href="/#">
                      {myAuth.account}
                    </a>
                  </li>
                  <li className="nav-item">
                    {/* <a className="nav-link" href="/#"> */}
                    {/* 顯示登出 */}
                    <a className="nav-link" href="#/" onClick={(e)=>{
                     e.preventDefault();
                     logout();
                   }}>
                      登出
                    </a>
                  </li>
                </>
              ) : (
                <Link className="nav-link" style={actives.login} to="/login">
                  login
                </Link>
                
              )}
              {/* </li> */}
              {/* </ul> */}
              {/* toggle button */}
              {/* <ul className="navbar-nav mb-2 mb-lg-0">
             <li className="nav-item">
                {myAuth.account} */}

              <li className="nav-item"></li>
              
              {/* 屬性設定元件 */}
              {/* <ToggleButton texts={["暗", "亮"]} /> */}
              {/* theme功能在Navbar */}
              <ToggleButton
                texts={["暗", "亮"]}
                statusIndex={themeName === "dark" ? 0 : 1}
                handler={(i) => {
                  setTheme(i === 0 ? themes.dark : themes.light);
                }}
              />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
