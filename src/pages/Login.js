import { useContext, useState } from "react";
import axios from "axios";
import { LOGIN_API } from "../my-config";
import AuthContext from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setMyAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    account: "",
    password: "",
  });

  const handler = (e) => {
    const id = e.currentTarget.id;
    const val = e.currentTarget.value;
    // console.log({id, val});

    setFormData({ ...formData, [id]: val });
  };

  const mySubmit = async (e) => {
    e.preventDefault();
    // 1.const response = await axios.post(LOGIN_API, formData);
    const { data } = await axios.post(LOGIN_API, formData);
    console.log(formData);
    console.log(data);
    if (data.success) {
      localStorage.setItem("auth", JSON.stringify(data.auth));
      alert("登入成功");
      //登入後更新狀態 內層才能看到帳戶名稱
      console.log(JSON.stringify(data))
      setMyAuth({...data.auth, authorised: true});
      // 登入跳主頁/
      navigate("/");

      // 1.console.log(response);
    } else {
      localStorage.removeItem("auth"); // 移除
      alert("登入失敗");
    }
  };
  //登入
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={mySubmit}>
            <div className="mb-3">
              <label htmlFor="account" className="form-label">
                Account
              </label>
              <input
                type="text"
                className="form-control"
                id="account"
                onChange={handler}
                value={formData.account}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              {/* 可控表單 */}
              <input
                type="password"
                className="form-control"
                id="password"
                onChange={handler}
                value={formData.password}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
