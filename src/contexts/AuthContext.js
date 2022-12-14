import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export default AuthContext;

export const AuthContextProvider = function ({ children }) {
  const navigate = useNavigate();
  const unAuth = {
    // let initAuth = {
    authorised: false, // 有沒有登入
    sid: 0,
    account: "",
    token: "",
  };
  let initAuth = { ...unAuth };

  // 取得目前狀態
  const str = localStorage.getItem("auth");
  if (str) {
    const localAuth = JSON.parse(str);
    if (localAuth && localAuth.token) {
      initAuth = { ...localAuth, authorised: true };
    }
  }
  const [myAuth, setMyAuth] = useState(initAuth);

  const logout = ()=>{
            localStorage.removeItem('auth');
            setMyAuth(unAuth);
            navigate('/login');
        };

  //const [theme, setTheme] = useState(themes.light);

  // TODO: 取得目前狀態
  // 2. 登入: 成功, 失敗
  // TODO: 登出

  return (
    // <AuthContext.Provider value={{}}>
    //傳入參數
    // <AuthContext.Provider value={{ myAuth, setMyAuth }}>
    
    //登出狀態
    <AuthContext.Provider value={{myAuth, setMyAuth, logout}}>
      {children}
    </AuthContext.Provider>
  );
};
