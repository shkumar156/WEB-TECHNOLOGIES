import AdminSideBar from "./AdminSideBar";
import Dashboard from "./Dashboard";
import adminImg from "../Img/admin.png";
import Layout from "./Layout";
import Footer from "./Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


function Admindash() {
  return (
    <>
      <div className="container-fluid">
        <div className="row row11">
          <div className="col col-md-3">
            <div className="row row10">
              <img className="admin-img" src={adminImg} alt="" />
              <h5>Admin Dashboard</h5>
              {/* GitHub icon button */}
              <a
                href="https://github.com/shkumar156"
                target="_blank"
                rel="noopener noreferrer"
               
              >
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                Visit GitHub
              </a>
            </div>
            <AdminSideBar />
          </div>
          <div className="col col-md-9">
           <Dashboard/>
          </div>
        </div>
        <div className="row row8">
          <h6><Footer/></h6>
        </div>
      </div>
    </>
  );
}

export default Admindash;
