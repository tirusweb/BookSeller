import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../image/logo.png";
import face from "../../../image/Facebook-on.webp";
import insta from "../../../image/Insta-on.webp";
import Linkin from "../../../image/twitter-on.webp";
import Twiter from "../../../image/tumblr-on.webp";
import Tiktok from "../../../image/pinterest-on.webp";
import youtube from "../../../image/Youtube-on.webp";
import dt1 from "../../../image/lazada.webp";
import dt2 from "../../../image/shoppe.webp";
import dt3 from "../../../image/tiktok.webp";

const Footer = () => {
  return (
    <>
      <div className=" bg-white h-auto">
        <div className=" mt-4 mx-2">
          <div className=" grid grid-cols-5 gap-4">
            <div className=" col-span-2 mt-2 border-r border-solid border-gray-200">
              <div className=" pr-6">
                <div className=" flex items-center justify-start ">
                  <Link to="/">
                    <img
                      className="pl-4 h-[50px] w-auto object-cover"
                      src={logo}
                      alt="Logo Bán Sách"
                    />
                  </Link>
                  <p className=" uppercase mt-6 font-bold text-2xl ml-1 text-red-500">
                    Sachhay.com
                  </p>
                </div>
                <div className="">
                  <p className=" font-normal text-black text-sm">
                    {" "}
                    Trang web được thực hiện bởi 2 thành viên nhóm 7 gồm :{" "}
                  </p>
                  <p className=" font-medium text-gray-600 text-sm ">
                    {" "}
                    - Nguyễn Trung Hiếu
                  </p>
                  <p className="font-medium text-gray-600 text-sm ">
                    {" "}
                    - Trần Thị Hồng
                  </p>
                </div>
                <div className=" mt-1">
                  <p className=" text-justify tex-sm font-normal">
                    SACHHAY.com nhận đặt hàng trực tuyến và giao hàng tận nơi.
                    KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng
                    cũng như tất cả Hệ Thống SachHay trên toàn quốc.
                  </p>
                </div>
                <div className=" mt-4 flex items-center justify-start">
                  <a href="https://www.facebook.com/hieuit2003">
                    <img
                      className="h-[40px] mr-4 w-auto object-cover"
                      src={face}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://www.facebook.com/hieuit2003">
                    <img
                      className="h-[40px] mr-4 w-auto object-cover"
                      src={insta}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://www.facebook.com/hieuit2003">
                    <img
                      className="h-[40px] mr-4 w-auto object-cover"
                      src={Linkin}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://www.facebook.com/hieuit2003">
                    <img
                      className="h-[40px] mr-4 w-auto object-cover"
                      src={youtube}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://www.facebook.com/hieuit2003">
                    <img
                      className="h-[40px] mr-4 w-auto object-cover"
                      src={Twiter}
                      alt="Facebook"
                    />
                  </a>
                  <a href="https://www.facebook.com/hieuit2003">
                    <img
                      className="h-[40px] mr-4 w-auto object-cover"
                      src={Tiktok}
                      alt="Facebook"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className=" col-span-1">
              <h1 className=" mt-4 mb-3 font-semibold text-sm text-black uppercase">
                Dịch vụ
              </h1>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Điều khoản dịch vụ
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Chính sách bảo mật thông tin cá nhân
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Chính sách bảo mật thanh toán
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Giới thiệu Fahasa
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Hệ thống trung tâm - nhà sách
                </p>
              </Link>
            </div>
            <div className=" col-span-1">
              <h1 className=" mt-4 mb-3 font-semibold text-sm text-black uppercase">
                Hỗ trợ
              </h1>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Chính sách đổi - trả - hoàn tiền
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  hính sách bảo hành - bồi hoàn
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Chính sách vận chuyển
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Chính sách khách sỉ
                </p>
              </Link>
              <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1"></p>
            </div>
            <div className=" col-span-1">
              <h1 className=" mt-4 mb-3 font-semibold text-sm text-black uppercase">
                tài khoản của tôi
              </h1>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Đăng nhập/Tạo mới tài khoản
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Thay đổi địa chỉ khách hàng
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Chi tiết tài khoản
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  CLịch sử mua hàng
                </p>
              </Link>
            </div>
          </div>
          <div className="  grid grid-cols-5 gap-4">
            <div className=" col-start-3 col-span-3">
              <h1 className=" mt-4 mb-3 font-semibold text-sm text-black uppercase">
                Liên Hệ
              </h1>
            </div>
            <div className="col-start-3 col-span-1">
              <Link to="" className=" flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>

                <p className=" mt-2 ml-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  Yên sở - Hoàng mai - Hà nội
                </p>
              </Link>
            </div>
            <div className="col-start-4 col-span-1">
              {" "}
              <Link to="" className=" flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>

                <p className=" mt-2 ml-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  nguyentrunghieuit03@gmail.com
                </p>
              </Link>
            </div>
            <div className="col-start-5 col-span-1">
              {" "}
              <Link to="" className=" flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-5 mt-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>

                <p className=" mt-2 ml-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  0886888666
                </p>
              </Link>
            </div>
          </div>
          <div className="  grid grid-cols-5 gap-2">
            <div className=" col-start-3 col-span-3">
              <h1 className=" mt-8 mb-3 font-semibold text-sm text-black uppercase">
                Đối tác bán hàng
              </h1>
            </div>
            <div className="col-start-3 col-span-1">
              <Link to="" className=" flex items-center justify-start">
                <img src={dt1} className=" h-[50px]" alt="Lazada"/>
              </Link>
            </div>
            <div className="col-start-4 col-span-1">
              {" "}
              <Link to="" className=" flex items-center justify-start">
                <img src={dt2} className=" h-[50px]" alt="Shopee"/>
              </Link>
            </div>
            <div className="col-start-5 col-span-1">
              {" "}
              <Link to="" className=" flex items-center justify-start">
                <img src={dt3} className=" h-[70px]" alt="Tiktok"/>
              </Link>
            </div>
          </div>
          <div className="  grid grid-cols-5 mt-4 gap-4 mx-6">
            <div className="  col-span-5">
              <h1 className=" mt-4 mb-1 font-semibold text-sm text-black uppercase ">
                {" "}
                Thường được tìm kiếm
              </h1>
            </div>
            <div className=" col-span-1">
              <Link to="">
                <p className=" text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  truyện dan brown
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách hay về gia đình
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sach hoc tieng trung
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách blockchain
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách khởi nghiệp
                </p>
              </Link>
            </div>
            <div className=" col-span-1">
              <Link to="">
                <p className=" text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  truyện dan brown
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách hay về gia đình
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sach hoc tieng trung
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách blockchain
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách khởi nghiệp
                </p>
              </Link>
            </div>
            <div className=" col-span-1">
              <Link to="">
                <p className=" text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  truyện dan brown
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách hay về gia đình
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sach hoc tieng trung
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách blockchain
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách khởi nghiệp
                </p>
              </Link>
            </div>
            <div className=" col-span-1">
              <Link to="">
                <p className=" text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  truyện dan brown
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách hay về gia đình
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sach hoc tieng trung
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách blockchain
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách khởi nghiệp
                </p>
              </Link>
            </div>
            <div className=" col-span-1">
              <Link to="">
                <p className=" text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  truyện dan brown
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách hay về gia đình
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sach hoc tieng trung
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách blockchain
                </p>
              </Link>
              <Link to="">
                <p className=" mt-2 text-sm cursor-pointer text-gray-700 font-normal hover:text-red-400 hover:ml-2 transition-transform duration-300 transform hover:translate-x-1">
                  sách khởi nghiệp
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center text-gray-500 py-4">
        © copyright : nguyentrunghieu&tranthihong
        </div>
      </div>
    </>
  );
};

export default Footer;
