import { createContext, useState } from "react";


export const themes = {
    dark: {
        name: 'dark',
        backgroundColor: 'gray',
        color: 'white',
    },
    light: {
        name: 'light',
        backgroundColor: 'yellow',
       color: 'black',
    }
};

// const ThemeContext = createContext({...themes.dark});
const ThemeContext = createContext({});

export default ThemeContext;

export const ThemeContextProvider = function ({children}){
    //3 const [theme, setTheme] = useState(themes.dark);
    
    //theme功能在Navbar
    const [theme, setTheme] = useState(themes.light);
    
    return (
        <ThemeContext.Provider value={{...theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
          //會出三個東西16.18.20 ThemeContext
        // 起始標籤中間就是他的小孩value= 不能記住任何東西要建立一個const[ ] = useState要包成物件傳得越細會複雜Retasdrill鑽洞方式場景變化大型應用程式大一點才用Context 較容易存資料的東西 提供者createContext要的資料
        // const [theme, setTheme]狀態初始值 = useState(themes.dark);也會給那資料部瘀要再給({...themes.dark});
    )
};

