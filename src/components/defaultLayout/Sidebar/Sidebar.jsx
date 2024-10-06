import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility
  const [isDropdown, setIsDropdown] = useState(false);
  const [isDropdownEdu, setIsDropdownEdu] = useState(false);
  const [isSign, setIsSign] = useState(false);
  const [isTuition, setIsTuition] = useState(false);
  const [isSetting, setIsSetting] = useState(false);

  const toggleDropDown = () => {
    setIsDropdown(!isDropdown);
    setIsDropdownEdu(false);
    setIsSign(false);
    setIsTuition(false);
    setIsSetting(false);
  };
  const toggleDropDownEdu = () => {
    setIsDropdownEdu(!isDropdownEdu);
    setIsDropdown(false);
    setIsSign(false);
    setIsTuition(false);
    setIsSetting(false);
  };
  const toggleDropDownSign = () => {
    setIsSign(!isSign);
    setIsDropdown(false);
    setIsDropdownEdu(false);
    setIsTuition(false);
    setIsSetting(false);
  };
  const toggleDropDownTuition = () => {
    setIsTuition(!isTuition);
    setIsDropdown(false);
    setIsDropdownEdu(false);
    setIsSign(false);
    setIsSetting(false);
  };
  const toggleDropDownSetting = () => {
    setIsSetting(!isSetting);
    setIsTuition(false);
    setIsDropdown(false);
    setIsDropdownEdu(false);
    setIsSign(false);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle sidebar */}
      <button onClick={toggleSidebar} className=" bg-white z-20 fixed top-20 left-1">
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 bg-white text-gray-500 ml-56 p-2 rounded-md fixed z-50 shadow-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-12 bg-white text-gray-500 pl-2 p-2 rounded-md fixed  z-50 shadow-lg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        )}
      </button>
      {/* Sidebar */}
      <div
        className={`fixed z-20 top-0 left-0 h-auto w-56 bg-cyan-500 mt-[70px] text-white transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="">
          <ul>
            <li className="flex items-center justify-start pl-2 py-2 border-solid border-gray-500 border-b">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>

              <Link to="/" className="uppercase text-sm font-semibold pl-2">
                Trang chủ
              </Link>
            </li>
            <li
              onClick={toggleDropDown}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-cyan-600 flex items-center justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                    />
                  </svg>

                  <a className="text-sm font-semibold uppercase pl-2">
                    Thông tin chung
                  </a>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <ul
                className={` cursor-pointer h-auto py-2 ${
                  isDropdown ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li
                  to="thong-tin-sinh-vien"
                  className="py-2 pl-4 text-sm hover:bg-cyan-600"
                >
                  <Link
                    to="/thong-tin-sinh-vien"
                    className="text-inherit no-underline"
                  >
                    Thông tin sinh viên
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/cap-nhat-thong-tin"
                    className="text-inherit no-underline"
                  >
                    Đề xuất cập nhật thông tin
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/de-xuat-bieu-mau"
                    className="text-inherit no-underline"
                  >
                    Đề xuất biểu mẫu
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/ghi-chu-nhac-nho"
                    className="text-inherit no-underline"
                  >
                    Ghi chú nhắc nhở
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/danh-sach-ho-so"
                    className="text-inherit no-underline"
                  >
                    Danh sách hồ sơ cá nhân
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={toggleDropDownEdu}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-cyan-600 flex items-center justify-between">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>

                  <a href="#" className=" uppercase text-sm font-semibold pl-2">
                    Học tập
                  </a>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <ul
                className={` cursor-pointer h-auto py-2 ${
                  isDropdownEdu ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/ket-qua-hoc-tap"
                    className="text-inherit no-underline"
                  >
                    Kết quả học tập
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/lich-hoc-theo-tuan"
                    className="text-inherit no-underline"
                  >
                    Lịch theo tuần
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/lich-theo-tien-do"
                    className="text-inherit no-underline"
                  >
                    Lịch theo tiến độ
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/lich-toan-truong"
                    className="text-inherit no-underline"
                  >
                    Lịch toàn trường
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/thong-tin-diem-danh"
                    className="text-inherit no-underline"
                  >
                    Thông tin điểm danh
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/ket-qua-ren-luyen"
                    className="text-inherit no-underline"
                  >
                    Kết quả rèn luyện
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/ke-hoach-thi"
                    className="text-inherit no-underline"
                  >
                    Kế hoạch tổ chức thi
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link to="/khen-thuong" className="text-inherit no-underline">
                    Khen thưởng sinh viên
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={toggleDropDownSign}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-cyan-600 flex items-center justify-between">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>

                  <a href="#" className="text-sm font-semibold uppercase pl-2">
                    đăng ký học phần
                  </a>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <ul
                className={` cursor-pointer h-auto py-2 ${
                  isSign ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/chuong-trinh-khung"
                    className="text-inherit no-underline"
                  >
                    Chương trình khung
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/dang-ki-hoc-phan"
                    className="text-inherit no-underline"
                  >
                    Đăng ký học phần
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link to="/dang-ki-thi" className="text-inherit no-underline">
                    Đăng ký thi lại
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/dang-ki-mon-hoc-dieu-kien"
                    className="text-inherit no-underline"
                  >
                    Đăng ký môn học điều kiện
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={toggleDropDownTuition}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-cyan-600 flex items-center justify-between">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                    />
                  </svg>

                  <a href="#" className="text-sm font-semibold uppercase pl-2">
                    Học phí
                  </a>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <ul
                className={` cursor-pointer h-auto py-2 ${
                  isTuition ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/tra-cuu-cong-no"
                    className="text-inherit no-underline"
                  >
                    Tra cứu công nợ
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/thanh-toan-truc-tuyen"
                    className="text-inherit no-underline"
                  >
                    Thanh toán trực tuyến
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/phieu-thu-tong-hop"
                    className="text-inherit no-underline"
                  >
                    Phiếu thu tổng hợp
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onClick={toggleDropDownSetting}
              className="  block items-center justify-start x border-solid border-gray-500 border-b"
            >
              <div className=" pl-2 py-2 hover:bg-cyan-600 flex items-center justify-between">
                <div className="flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>

                  <a href="#" className="text-sm font-semibold uppercase pl-2">
                    Khác
                  </a>
                </div>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4 mr-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>

              <ul
                className={` cursor-pointer h-auto py-2 ${
                  isSetting ? "block translate-y-auto" : "hidden"
                }`}
              >
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/lien-he-giai-dap-thac-mac"
                    className="text-inherit no-underline"
                  >
                    Liên hệ giải đáp
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/lien-he-gop-y"
                    className="text-inherit no-underline"
                  >
                    Liên hệ góp ý
                  </Link>
                </li>
                <li className="py-2 pl-4 text-sm hover:bg-cyan-600">
                  <Link
                    to="/hop-thu-sinh-vien"
                    className="text-inherit no-underline"
                  >
                    Hộp thư sinh viên
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
