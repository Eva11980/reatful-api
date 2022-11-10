import { useEffect, useState } from "react";

function AjaxTest() {
  const [listData, setListData] = useState({});

  async function getList() {
    const r = await fetch("http://192.168.35.200:3001/ab/api");
    const result = await r.json();
    setListData(result);
  }
  // URL獨立檔, axios
  useEffect(() => {
    console.log(2);
    getList();
  }, []);
  console.log(1);
  return <pre>{JSON.stringify(listData, null, 4)}</pre>;
}

export default AjaxTest;
