import { useEffect, useState, useContext } from "react";
import { useLocation } from 'react-router-dom';
import { AB_LIST_AUTH } from "./../my-config";
import axios from "axios";
import ListTable from "../components/ListTable";
import Pagination from "../components/Pagination";
import AuthContext from "../contexts/AuthContext";

function AbListAuth() {
  const [listData, setListData] = useState({
    totalRows: 0,
    totalPages: 0,
    perPage: 0,
    page: 1,
    rows: [],
  });
  const location = useLocation();
  const {myAuth} = useContext(AuthContext);
  const usp = new URLSearchParams(location.search);

  async function getList() {
    if(!myAuth.authorised){
        return {
            totalRows: 0,
            totalPages: 0,
            perPage: 0,
            page: 1,
            rows: [],
          };
    }
    const response = await axios.get(AB_LIST_AUTH + `?` + usp.toString(), {
        headers: {
            Authorization: 'Bearer ' + myAuth.token
        }
    });
    console.log(response);
    setListData(response.data);
  }

  useEffect(() => {
    // console.log(2);
    getList();
  }, [ location ]);

  // console.log(1);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
            <Pagination page={listData.page} totalPages={listData.totalPages} />
        </div>
      </div>

      <ListTable rows={listData.rows}></ListTable>
    </div>
  );
}

export default AbListAuth;
