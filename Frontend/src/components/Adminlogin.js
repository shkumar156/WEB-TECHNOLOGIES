import "./admin.css";
import adminImg from "../Img/admin.png";


import AdminSideBar from "./AdminSideBar";
import Login from "./Login";

function Adminlogin() {
  return (
    <>
      <div className="container-fluid">
       
        <div className="row row11">
          <div className="col col-md-3">
            <div className="row row10">
              <img className="admin-img" src={adminImg} alt="adm" />
              <h5>Admin Dashboard</h5>
            </div>
            <AdminSideBar />
          </div>
          <div className="col col-md-9">
            <Login/>
          </div>
        </div>
        
      </div>
      <div className="row row8">
          <h6>Copyright © www.ApexShopping.com | All rights reserved!</h6>
        </div>
    </>
  );
}

export default Adminlogin;