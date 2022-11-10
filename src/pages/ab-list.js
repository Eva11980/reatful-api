
import {useEffect, useState} from 'react';
import {AB_LIST} from './../my-config';
import axios from 'axios';
import ListTable from '../components/ListTable';
import Pagination from "../components/Pagination";
import{useLocation}from "react-router-dom";

function AbList() {
  const [listData, setListData] = useState({
    //不用字串""
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: []
  });

  const location = useLocation();
  const usp = new URLSearchParams(location.search);

  async function getList() {
    const response = await axios.get(AB_LIST + `?` + usp.toString());
    console.log(response);
    setListData(response.data);
  }

  useEffect(() => {
    // console.log(2);
    getList();
  }, [location]);
  //裡面得數字有變會重新叫資料  重新渲染資料

  // console.log(1);query string 換頁
  return (
      <div className="container">
      <div className="row">
        <div className="col">
            {/* <Pagination page={3} totalPages={20} /> */}
            <Pagination page={listData.page} totalPages={listData.totalPages} />
        </div>
      </div>
        <ListTable rows={listData.rows}></ListTable>

      </div>
  );
}

export default AbList;