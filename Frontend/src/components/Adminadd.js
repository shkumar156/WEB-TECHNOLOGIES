import "./admin.css";
import adminImg from "../Img/admin.png";

import Addorders from "./Addorders";
import AdminSideBar from "./AdminSideBar";
import Footer from "./Footer";
import AllProductTable from "./AllProductTable";

function Adminadd() {
  return (
    <>
      <div className="container-fluid">
       
        <div className="row row11">
          <div className="col col-md-3">
            <div className="row row10">
              <img className="admin-img" src={adminImg} alt="" />
              <h5 classname='ds'>Admin Dashboard</h5>
            </div>
            <AdminSideBar />
          </div>
          <div className="col col-md-9">
            {/* <Addorders/> */}
            <AllProductTable/>
        
          </div>
        </div>
        
      </div>
      <div className="row row8">
          <h6><Footer/></h6>
        </div>
    </>
  );
}

export default Adminadd;
