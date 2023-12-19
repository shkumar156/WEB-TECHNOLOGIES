import "./admin.css";
import adminImg from "../Img/admin.png";


import AdminSideBar from "./AdminSideBar";
import Ordersconfirm from "./Ordersconfirm";
import Footer from "./Footer";
import UpdateProduct from "./UpdateProduct";

function Admindel() {
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
            <UpdateProduct/>
            {/* <Ordersconfirm/> */}
          </div>
        </div>
        
      </div>
      <div className="row row8">
          <h6><Footer/></h6>
        </div>
    </>
  );
}

export default Admindel;
