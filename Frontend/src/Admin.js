import "./admin.css";
import adminImg from "./Img/admin.png";
import AdminSideBar from "./components/AdminSideBar";
import Layout from "./components/Layout";
import Footer from "./components/Footer";


function Admin() {
  return (
    <>
      <div className="container-fluid">
        
       
 
        <div className="row row11">
          <div className="col col-md-3">
            <div className="row row10">
              <img className="admin-img" src={adminImg} alt="" />
              <h5>Admin Dashboard</h5>
            </div>
            <AdminSideBar />
          </div>
          <div className="col col-md-9">
            <Layout/>
          </div>
        </div>
        <div className="row row12">
     <Footer/>
        </div>
      </div>
    </>
  );
}

export default Admin;
