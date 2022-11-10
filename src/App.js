
// import {useEffect, useState} from 'react';

// function App() {
//   //一般放到前面，會執行第一次是空物件二次呼叫useState不會再做第二次
//   //依照順序會前後比對,不可以放在for迴圈
//   const [listData, setListData] = useState({});

//   async function getList(){
//     const r = await fetch('http://localhost:3001/ab/api');
//     const result = await r.json();
//     setListData(result);
//   }

//   useEffect(() => {
//     console.log(2);
//     getList();
//   }, []);
//   console.log(1);
//   return (
//       <pre>{ JSON.stringify(listData, null, 4) }</pre>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route} from 'react-router-dom';
// import AjaxTest from './pages/AjaxTest';
import Tmp from './pages/Tmp';
//元件得名稱 //檔名的路徑
import Navbar from './components/Navbar';
import Login from './pages/Login';
// import { ThemeContextProvider } from "./contexts/ThemeContext";
import MyContextProviders from "./contexts/MyContextProviders";
import AbListAuth from "./pages/ab-list-auth";

//引入
function App() {

  return (
    <>
      <BrowserRouter>
      {/* <ThemeContextProvider> */}
      <MyContextProviders>
      <Navbar/>
        <Routes>
        {/* 前端路由/跟目錄path react方法 Routes/包Route
        寫要的路徑 不刷頁面換網址*/}
        <Route path="/list-auth" element={<AbListAuth />} />
          <Route path="/" element={ <AbListAuth t /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/tmp/:sid" element={ <Tmp /> } />
          <Route path="/tmp" element={ <Tmp /> } />
          
        </Routes>
        {/* </ThemeContextProvider> */}
        </MyContextProviders>
      </BrowserRouter>
    </>

  );
}

export default App;

