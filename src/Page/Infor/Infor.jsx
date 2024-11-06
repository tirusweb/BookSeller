import React, { useEffect, useState } from "react";
import { apiGetUser, apiUpdateUser } from "../../services/User/User";
import infor from "../../../src/image/inforsu.png";
import infor1 from "../../../src/image/inforfa.png";
import { useNavigate } from "react-router-dom";

const Infor = () => {
  const [error, setError] = useState(null);

  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [isPopup, setShowPopup] = useState(false);
  const [isFalse, setShowFalse] = useState(false);
  const navigate = useNavigate();

  const handleInfor = () => {
    navigate("/ho-so-ca-nhan");
  }
  const handleChang = () => {
    navigate("/doi-mat-khau");
  }
  const handleAddress = () => {
    navigate("/dia-chi");
  }
  const handleUpdate = async () => {
    const data = {
      fullname,
      phone,
      email,
      pass,
    };
  
    try {
      const response = await apiUpdateUser(username, data); // Gửi dữ liệu lên API để cập nhật
  
      // Kiểm tra giá trị status trong response.data
      if (response.data.status === 1) {
        setShowPopup(true); // Hiển thị popup khi cập nhật thành công
      } else {
        setShowFalse(true); // Hiển thị popup lỗi nếu thất bại
      }
    } catch (error) {
      setError("Đã xảy ra lỗi khi cập nhật thông tin. Vui lòng thử lại.");
      console.error("Lỗi khi cập nhật thông tin:", error.message);
    }
  };
  
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiGetUser(username);
        console.log(response.data);
        if (response.data.status === 1) {
          const user = response.data.user;
          setFullName(user.fullname);
          setPhone(user.phone);
          setEmail(user.email);
          setPass(user.pass);
        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải chi tiết người dùng. Vui lòng thử lại.");
      }
    };

    fetchUsers();
  }, [username]);

  return (
    <>
      <div className="">
        <div className=" w-screen">
          <div className=" mx-14 my-8">
            <div className="">
              <div className=" grid grid-cols-10 gap-4 ">
                <div className=" col-span-3 row-span-1 ">
                  <div className="  bg-white rounded shadow-lg">
                    <div className=" pl-2 py-2  flex items-center justify-between">
                      <div className="flex ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className=" size-4 text-red-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                          />
                        </svg>

                        <p className="text-xs text-gray-600 font-medium uppercase pl-2">
                          Thông tin tài khoản
                        </p>
                      </div>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="size-4 text-red-600 mr-2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </div>
                    <p onClick={handleInfor} className="pl-8 py-2 cursor-pointer font-medium bg-red-500 text-white text-xs">
                      {" "}
                      Hồ sơ cá nhân
                    </p>
                    <p onClick={handleAddress} className="pl-8 py-2 cursor-pointer font-medium text-xs hover:bg-red-200">
                      {" "}
                      Thông tin địa chỉ
                    </p>
                    <p onClick={handleChang} className="pl-8 py-2 cursor-pointer font-medium text-xs hover:bg-red-200">
                      {" "}
                      Đổi mật khẩu
                    </p>
                  </div>
                </div>
                <div className=" col-span-7 bg-white rounded shadow-lg">
                  <div className="">
                    <div className="">
                      <div className=" flex items-center justify-start my-2 mx-8">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2.5}
                          stroke="currentColor"
                          className="size-6 text-red-600"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776"
                          />
                        </svg>

                        <h2 className=" text-left ml-2 font-bold uppercase text-sm  text-red-600 ">
                          {" "}
                          Hồ sơ cá nhân
                        </h2>
                      </div>
                      <div className=" border border-solid border-gray-200 "></div>

                      <div className=" w-full">
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-1/6 mx-4 text-sm font-medium ">
                            {" "}
                            Tên đăng nhập{" "}
                          </p>
                          <input
                            value={username}
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-4/6 border rounded border-gray-200 border-solid"
                            readOnly
                          />
                        </div>
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-1/6 mx-4 text-sm font-medium ">
                            {" "}
                            Họ và tên{" "}
                          </p>
                          <input
                            required
                            value={fullname}
                            onChange={(e) => setFullName(e.target.value)}
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-4/6 border rounded border-gray-200 border-solid"
                          />
                        </div>
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-1/6 mx-4 text-sm font-medium ">
                            {" "}
                            Số điện thoại{" "}
                          </p>
                          <input
                            value={phone}
                            required
                            onChange={(e) => setPhone(e.target.value)}
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-4/6 border rounded border-gray-200 border-solid"
                          />
                        </div>
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-1/6 mx-4 text-sm font-medium ">
                            {" "}
                            email{" "}
                          </p>
                          <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-4/6 border rounded border-gray-200 border-solid"
                          />
                        </div>
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-1/6 mx-4 text-sm font-medium ">
                            {" "}
                            Mật khẩu{" "}
                          </p>
                          <input
                            value={pass}
                            readOnly
                            type="password"
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-4/6 border rounded border-gray-200 border-solid"
                          />
                        </div>
                        <div className=" flex my-6 items-center justify-center">
                          <button
                            onClick={handleUpdate}
                            className=" text-white font-semibold text-sm hover:bg-red-500 bg-red-600 py-2 px-6 rounded-lg shadow-lg"
                          >
                            Lưu thay đổi
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <div className=" flex-col items-center justify-center">
              <img
                src={infor}
                className=" mx-12 w-[100px] h-[100px]"
                alt="Ảnh thông báo thành công"
              />
              <p className=" font-semibold text-xl text-gray-600">
                {" "}
                Cập nhật thành công{" "}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-green-500 font-semibold text-white px-4 py-2 rounded"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
      {isFalse && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <div className=" flex-col items-center justify-center">
              <img
                src={infor1}
                className=" mx-20 w-[100px] h-[100px]"
                alt="Ảnh thông báo thất bại"
              />
              <p className=" font-semibold text-xl text-gray-600">
                {" "}
                Cập nhật thất bại{" "}
              </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={() => setShowFalse(false)}
                className="bg-red-500 font-semibold text-white px-4 py-2 rounded"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Infor;
