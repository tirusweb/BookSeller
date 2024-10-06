import React, { useEffect, useRef, useState } from "react";
import logo from "../../../image/logo.png";
import avatar from "../../../image/avatar.jpg";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isShow, setIsShow] = useState(false);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );

  const handleHome = () => navigate("/home");
  const handleNotifi = () => navigate("/ghi-chu-nhac-nho");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsShow(false);
      }
    };

    if (isShow) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShow]);

  return (
    <>
      <div className=" z-30 containe fixed left-0 right-0">
        <div className="">
          <div className="flex items-start justify-between w-full h-[60px]  bg-white shadow-lg">
            <div className=" flex items-start justify-start ">
              <Link to="/">
                <img
                  className="pl-4 h-[50px] w-auto object-cover"
                  src={logo}
                  alt="Logo Bán Sách"
                />
              </Link>
              <p className=" uppercase mt-6 font-bold text-xl ml-1 text-red-500">
                Sachhay.com
              </p>
            </div>

            <div className=" flex-1 mt-2 ml-[10%]">
              <div className="flex items-center justify-around py-2 border border-solid rounded-lg border-gray-400">
                <input
                  className="ml-2 flex-1 text-sm px-2 outline-none border-none "
                  type="text"
                  placeholder="Đắc nhân tâm"
                />
                <div className=" bg-red-500  px-4 mr-2 rounded py-1 hover:bg-red-400 cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-4 font-bold text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-1 pr-4 fle font-semibold items-center justify-end text-gray-500 mr-4 mt-3">
              <div
                onClick={handleNotifi}
                className=" cursor-pointer xs:hidden lg:block"
              >
                <div className="flex mr-4 text-sm ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                    />
                  </svg>
                  Thông báo
                </div>
              </div>
              <div className=" xs:hidden lg:block">
                <div
                  onClick={handleHome}
                  className="flex mr-4 cursor-pointer  text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-5 mr-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                  Giỏ hàng
                </div>
              </div>
              <div>
                <div
                  onClick={() => setIsShow(!isShow)}
                  className="flex items-center cursor-pointer"
                >
                  <img
                    className="pl-4 mr-2 h-[30px] w-auto object-cover"
                    src={avatar}
                    alt="Logo Bán Sách"
                  />
                  <span className=" xs:hidden lg:block text-sm">
                    {username}
                  </span>
                </div>
                <div
                  ref={menuRef}
                  className={` ${
                    isShow ? " block" : " hidden"
                  }  bg-white shadow-xl w-auto  fixed top-[64px] rounded right-2`}
                >
                  <ul>
                    <li className="text-gray-500 px-6 py-2 cursor-pointer  hover:bg-gray-200 border-b border-solid border-gray-100 font-normal mt-2 text-sm">
                      <Link to={"/thong-tin-sinh-vien"}>Thông tin cá nhân</Link>
                    </li>
                    <li
                      //   onClick={openModal}
                      className="text-gray-500 px-6 py-2 cursor-pointer hover:bg-gray-200 border-b border-solid border-gray-100 font-normal mt-2 text-sm"
                    >
                      <Link>Đổi mật khẩu</Link>
                    </li>
                    <li
                      onClick={handleLogout}
                      className="text-gray-500 px-6 py-2 cursor-pointer hover:bg-gray-200 border-b border-solid border-gray-100 font-normal mt-2 text-sm"
                    >
                      Đăng xuất
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
