import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Adminadd from "./components/Adminadd";
import Admindel from "./components/Admindel";
import Adminconfirm from "./components/Adminconfirm";
import Admindash from "./components/Admindash";
import MenuCard from "./components/MenuCard";
import Adminsettings from "./components/Adminsettings";
import ShirtMenu from "./components/Shirtmenu";
import Login from "./components/Login";
import Adminproduct from "./components/Adminproduct";
import Signup from "./components/Signup";
import Customerlogin from "./components/Customerlogin";
import DressMenu from "./components/DressMenu";
import ShoesMenu from "./components/ShoesMenu";
import HoodieMenu from "./components/HoodieMenu";
import ShortsMenu from "./components/ShortsMenu";
import TrousersMenu from "./components/TrousersMenu";
import SunglassesMenu from "./components/SunglassesMenu";
import GlovesMenu from "./components/GlovesMenu";
import Track from "./components/Track";
import Rating from "./components/Rating";
import Sale from "./components/Sale";
import SaleItems from "./components/SaleItems";
import axios from "axios";
import { Toast } from "./Toaster/Toaster";
import { ToastContainer } from "react-toastify";
import UserLoginDetails from "./View/UserLoginDetails";
import Admindetails from "./components/Admindetails";

const App = () => {
  const viewShirtMenu = () => {
    // You can handle navigation to the ShirtMenu here.
    // For simplicity, we'll use a state variable to control visibility.
    setShirtMenuVisible(true);
  };

  const [isShirtMenuVisible, setShirtMenuVisible] = React.useState(false);
  const [user, setUser] = useState(false);
  const [userData, setUserData] = useState(null);

  const [admin, setAdminUser] = useState(false);

  const navigate = useNavigate();
  const userCreate = (data) => {
    axios
      .post("https://web-technologies-delta.vercel.app/api/users/createUser", data)
      .then((res) => {
        console.log(res.data, "responce");
        setUser(res.data.success);
        setUserData(res.data.user)
        Toast.success(res.data.message);
      })
      .catch((err) => {
        Toast.error(err.response.data.message);
      });
  };
  const userLogin = (data) => {
    console.log(data, "data");
    axios
      .post("https://web-technologies-delta.vercel.app/api/users/loginUser", data)
      .then((res) => {
        console.log(res.data, "responce");
        setUser(res.data.success);
        setUserData(res.data.user)
        Toast.success(res.data.message);
      })
      .catch((err) => {
        Toast.error(err.response.data.message);
      });
  };
  const adminLogin = (data) => {
    console.log(data, "data");
    axios
      .post("https://web-technologies-delta.vercel.app/api/users/loginAdmin", data)
      .then((res) => {
        console.log(res.data, "response");
        setAdminUser(res.data.success);
        setUser(true)
        Toast.success(res.data.message);
      })
      .catch((err) => {
        Toast.error(err.response.data.message);
      });
  };

  useEffect(() => {
    if (admin) {
      navigate("/adminPage");
    } else navigate("/adminlogin");
    
  }, [admin]);
  
  useEffect(() => {
    if (user &&!admin) {
      navigate("/userLoginDetails");
    } 
    if(!user &&!admin){
      navigate("/signup");
    }
   
  }, [user]);
  return (
    <>
      <div className="row row1">
        <Navbar {...{setUser,setAdminUser,user,admin}} />
        <ToastContainer />
      </div>
      {!user ? (
        <Routes>
          <Route path="/signup" element={<Signup userCreate={userCreate} />} />
          <Route
            path="/customerlogin"
            element={<Customerlogin userLogin={userLogin} />}
          />
          <Route
            path="/adminlogin"
            element={<Login adminLogin={adminLogin} />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userLoginDetails" element={<UserLoginDetails userData={userData} />} />
          <Route path="/adminPage" element={<Admindash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/menucard" element={<MenuCard />} />
          <Route path="/add" element={<Adminadd />} />
          <Route path="/del" element={<Admindel />} />
          <Route path="/confirm" element={<Adminconfirm />} />
          <Route path="/dashboard" element={<Admindash />} />
          <Route path="/settings" element={<Adminsettings />} />
          <Route path="/dash" element={<Adminproduct />} />
          <Route path="/customerservice" element={<Signup />} />
          <Route path="/" exact component={<MenuCard />} />
          <Route path="/shirt-menu" element={<ShirtMenu />} />
          <Route path="/dress-menu" element={<DressMenu />} />
          <Route path="/shoes-menu" element={<ShoesMenu />} />
          <Route path="/hoodie-menu" element={<HoodieMenu />} />
          <Route path="/shorts-menu" element={<ShortsMenu />} />
          <Route path="/trousers-menu" element={<TrousersMenu />} />
          <Route path="/sunglasses-menu" element={<SunglassesMenu />} />
          <Route path="/gloves-menu" element={<GlovesMenu />} />
          <Route path="/track" element={<Track />} />
          <Route path="/rate" element={<Rating />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/saleitems" element={<SaleItems />} />
          <Route path="/charts" element={<Admindetails/>} />
        </Routes>
      )}
    </>
  );
};

export default App;
