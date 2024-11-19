// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Login/login";
import Register from "./Login/register";
import DefaultLayout from "./components/defaultLayout/DefaultLayout";
import Home from "./Page/Home/Home";
import Detail from "./Page/DetailProduct/Detail";
import CartBook from "./Page/Cart/CartBook";
import Product from "./Page/AllProduct/Product";
import Notify from "./Page/Notifycation/Notify";
import LoginNew from "./Login/loginNew";
import Infor from "./Page/Infor/Infor";
import ChangPass from "./Page/Infor/ChangPass";
import Address from "./Page/Infor/Address";
import Pay from "./Page/Cart/Pay";
import ChangAddress from "./Page/Infor/ChangAdd";
import Contact from "./Page/Contact/Contact";
import MyOder from "./Page/MyOder/MyOder";
import SearchBook from "./Page/SearchName/Search";
import Kinhte from "./Page/Type/Economy";
import Vanhoc from "./Page/Type/Literature";
import Thieunhi from "./Page/Type/Children";
import KiNangSong from "./Page/Type/SkillLife";
import ForgotPassword from "./Login/ForgotPass";
import ChinhSachDV from "./Page/Polixy/Csdv";
import Gioithieu from "./Page/Polixy/Gioithieu";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    setIsAuthenticated(!!accessToken);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("accessToken");
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/loginnew" element={<LoginNew />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Home />} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
         <Route
          path="/chi-tiet-san-pham/:id"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Detail />} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
         <Route
          path="/gio-hang-san-pham"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<CartBook />} />
            ) : (
              <Navigate to="/gio-hang-san-pham" />
            )
          }
        />
        <Route
          path="/tat-ca-san-pham"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Product />} />
            ) : (
              <Navigate to="/tat-ca-san-pham" />
            )
          }
        />
         <Route
          path="/thong-bao"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Notify />} />
            ) : (
              <Navigate to="/thong-bao" />
            )
          }
        />
          <Route
          path="/ho-so-ca-nhan"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Infor />} />
            ) : (
              <Navigate to="/ho-so-ca-nhan" />
            )
          }
        />
         <Route
          path="/ho-so-ca-nhan"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Infor />} />
            ) : (
              <Navigate to="/ho-so-ca-nhan" />
            )
          }
        /> <Route
          path="/doi-mat-khau"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<ChangPass />} />
            ) : (
              <Navigate to="/doi-mat-khau" />
            )
          }
        />
        <Route
          path="/dia-chi"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Address />} />
            ) : (
              <Navigate to="/dia-chi" />
            )
          }
        />
         <Route
          path="/thanh-toan"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Pay />} />
            ) : (
              <Navigate to="/thanh-toan" />
            )
          }
        />
         <Route
          path="/thay-doi-dia-chi"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<ChangAddress />} />
            ) : (
              <Navigate to="/thay-doi-dia-chi" />
            )
          }
        />
        <Route
          path="/lien-he"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Contact />} />
            ) : (
              <Navigate to="/lien-he" />
            )
          }
        />
         <Route
          path="/don-hang-cua-toi"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<MyOder />} />
            ) : (
              <Navigate to="/don-hang-cua-toi" />
            )
          }
        />
         <Route
          path="/tim-kiem/:title"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<SearchBook />} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
          <Route
          path="/danh-muc-kinh-te"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Kinhte />} />
            ) : (
              <Navigate to="/danh-muc-kinh-te" />
            )
          }
        />
         <Route
          path="/danh-muc-van-hoc"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Vanhoc />} />
            ) : (
              <Navigate to="/danh-muc-van-hoc" />
            )
          }
        />
         <Route
          path="/danh-muc-thieu-nhi"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Thieunhi />} />
            ) : (
              <Navigate to="/danh-muc-thieu-nhi" />
            )
          }
        />
          <Route
          path="/danh-muc-ki-nang-song"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<KiNangSong />} />
            ) : (
              <Navigate to="/danh-muc-ki-nang-song" />
            )
          }
        />
          <Route
          path="/dieu-khoa-dich-vu"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<ChinhSachDV />} />
            ) : (
              <Navigate to="/dieu-khoa-dich-vu" />
            )
          }
        />
        <Route
          path="/gioi-thieu-bookhuh"
          element={
            isAuthenticated ? (
              <DefaultLayout children={<Gioithieu />} />
            ) : (
              <Navigate to="/gioi-thieu-bookhuh" />
            )
          }
        />
         <Route
          path="/quen-mat-khau"
          element={
            isAuthenticated ? (
              <ForgotPassword />
            ) : (
              <Navigate to="/quen-mat-khau" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
