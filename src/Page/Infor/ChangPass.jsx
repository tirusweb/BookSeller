import React, { useState } from "react";
import infor from "../../../src/image/inforsu.png";
import infor1 from "../../../src/image/inforfa.png";
import { apiChangPass } from "../../services/User/User";
import { useNavigate } from "react-router-dom";

const ChangPass = () => {
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );
  const [pass, setPass] = useState("");
  const [passNew, setPassNew] = useState("");
  const [rePass, setRePass] = useState("");
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


  const updatePass = async () => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (passNew !== rePass) {
      setError("Mật khẩu mới và mật khẩu nhập lại không khớp.");
      return;
    }
    if (!passNew.match(passwordRegex)) {
        setError("Mật khẩu mới phải có ít nhất 8 ký tự, bao gồm cả chữ và số.");
        return;
    }
    if (pass === passNew) {
      setError("Mật khẩu mới phải khác mật khẩu cũ.");
      return;
    }
  

    const data = {
      username,
      oldPass: pass, 
      pass: passNew, 
    };

    console.log("passNew", data);

    try {
      const response = await apiChangPass(data); // Gửi dữ liệu lên API để cập nhật mật khẩu

      if (response.data.status === 1) {
        setShowPopup(true);
        setPass("");
        setPassNew("");
        setRePass("");
        setError(null);
      } else {
        setError(response.data.msg); // Cập nhật thông báo lỗi từ server
        setShowFalse(true); // Hiển thị popup lỗi nếu thất bại
      }
    } catch (error) {
      setError("Đã xảy ra lỗi khi cập nhật mật khẩu. Vui lòng thử lại.");
      console.error("Lỗi khi cập nhật mật khẩu:", error.message);
    }
  };

  return (
    <>
      <div className="">
        <div className=" w-screen">
          <div className=" mx-14 my-8">
            <div className="">
              <div className=" grid grid-cols-10 gap-4 ">
                <div className=" col-span-3 row-span-1 ">
                  <div className=" bg-white rounded shadow-lg">
                    <div className=" pl-2 py-2 flex items-center justify-between">
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
                    <p onClick={handleInfor} className="pl-8 py-2 text-xs cursor-pointer font-medium hover:bg-red-20 ">
                      {" "}
                      Hồ sơ cá nhân
                    </p>
                    <p onClick={handleAddress}  className="pl-8 py-2 cursor-pointer font-medium text-xs hover:bg-red-200">
                      {" "}
                      Thông tin địa chỉ
                    </p>
                    <p  onClick={handleChang} className="pl-8 py-2 cursor-pointer font-medium bg-red-500 text-white text-xs">
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
                        <h2 className=" text-left ml-2 font-bold uppercase text-sm text-red-600 ">
                          {" "}
                          Đổi mật khẩu
                        </h2>
                      </div>
                      <div className=" border border-solid border-gray-200 "></div>

                      <div className=" w-full">
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-2/6 mx-4 text-sm font-medium ">
                            {" "}
                            Nhập mật khẩu cũ{" "}
                          </p>
                          <input
                          type="password"
                          placeholder="Nhập mật khẩu của bạn..."
                            value={pass}
                            onChange={(e) => setPass(e.target.value)}
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-3/6 border rounded border-gray-200 border-solid"
                          />
                        </div>
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-2/6 mx-4 text-sm font-medium ">
                            {" "}
                            Nhập mật khẩu mới{" "}
                          </p>
                          <input
                          type="password"
                          placeholder="Nhập mật khẩu mới..."

                            value={passNew}
                            onChange={(e) => setPassNew(e.target.value)}
                            required
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-3/6 border rounded border-gray-200 border-solid"
                          />
                        </div>
                        <div className=" flex my-4 items-center justify-start">
                          <p className=" w-2/6 mx-4 text-sm font-medium ">
                            {" "}
                            Nhập lại mật khẩu mới{" "}
                          </p>
                          <input
                          type="password"
                          placeholder="Nhập lại mật khẩu mới..."

                            value={rePass}
                            onChange={(e) => setRePass(e.target.value)}
                            required
                            className=" outline-cyan-200 text-gray-500 px-4 py-2 w-3/6 border rounded border-gray-200 border-solid"
                          />
                        </div>
                        <div>
                          {error && (
                            <p className="text-red-500 text-center  text-sm">{error}</p>
                          )}
                        </div>

                        <div className=" flex my-6 items-center justify-center">
                          <button
                            onClick={updatePass}
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
                className=" text-white font-semibold text-sm hover:bg-red-500 bg-red-600 py-2 px-6 rounded-lg shadow-lg"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangPass;
