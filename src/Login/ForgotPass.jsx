import React, { useState } from "react";
import pia from "../image/login3.jpg";
import { apiForgotPass } from "../services/User/User";
import infor from "../../src/image/inforsu.png";



const ForgotPassword = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [passNew, setPassNew] = useState("");
  const [rePass, setRePass] = useState("");
  const [isPopup, setShowPopup] = useState(false);
  const [isFalse, setShowFalse] = useState(false);
  

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
   

    const data = {
      Email: email,
      pass: passNew,
    };

    console.log("passNew", data);

    try {
      const response = await apiForgotPass(data); // Gửi dữ liệu lên API để cập nhật mật khẩu

      if (response.data.status === 1) {
        setShowPopup(true);
        setEmail("");
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
    <div className="w-screen flex items-center justify-center h-screen bg-blue-100">
      <div className="lg:w-[80%] lg:h-[80%] xs:w-[100%] xs:h-[100%] my-0 mx-auto bg-cyan-400 shadow-xl rounded">
        <div className="h-full grid grid-cols-5">
          <div className="lg:block xs:hidden col-span-3">
            <div className="flex-col flex items-center justify-center h-full bg-white">
              <h2 className="text-center font-bold text-cyan-500">
                CHÀO BẠN ĐỌC ĐẾN VỚI BOOKHUH.COM
              </h2>
              <img src={pia} className="lg:w-[500px] h-auto" alt="Edu" />
            </div>
          </div>
          <div className="h-full w-full flex items-center justify-center xs:col-span-5 lg:col-span-2">
            <div className="h-[90%] w-[90%] bg-cyan-600 shadow-xl lg:mx-auto lg:my-0 rounded-xl">
              <h2 className="lg:hidden xs:block mt-3 text-center font-bold text-cyan-800">
                CHÀO BẠN ĐỌC ĐẾN VỚI BOOKHUH.COM
              </h2>
              <h2 className="text-center uppercase mt-10 text-white font-bold">
                Quên mật khẩu
              </h2>

              <div className="flex-col flex items-center justify-center">
                <input
                  type="text"
                  placeholder="Nhập email của bạn..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className=" outline-cyan-200 w-[90%] mt-6  text-gray-500 px-4 py-2 border rounded border-gray-200 border-solid"
                />
                <input
                  type="password"
                  placeholder="Nhập mật khẩu mới..."
                  value={passNew}
                  onChange={(e) => setPassNew(e.target.value)}
                  required
                  className=" outline-cyan-200 w-[90%] mt-6 text-gray-500 px-4 py-2 border rounded border-gray-200 border-solid"
                />
                <input
                  type="password"
                  placeholder="Nhập lại mật khẩu mới..."
                  value={rePass}
                  onChange={(e) => setRePass(e.target.value)}
                  required
                  className=" outline-cyan-200 text-gray-500 px-4 py-2 w-[90%] mt-6 border rounded border-gray-200 border-solid"
                />

                {error && (
                  <p className="text-red-600 text-sm font-medium text-left mt-2">
                    {error}
                  </p>
                )}
                <button
                  onClick={updatePass}
                  className="w-[90%] px-4 py-2 mt-4 bg-cyan-500 text-white font-bold rounded-md hover:text-cyan-500 hover:bg-white"
                >
                  Xác nhận
                </button>
                <div className="flex items-center mt-2">
                  <p className="text-white text-sm">Bạn đã nhớ tài khoản?</p>
                  <a
                    href="/login"
                    className="text-sm ml-2 font-medium text-cyan-900 hover:text-white"
                  >
                    Quay lại
                  </a>
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
    </div>
  );
};

export default ForgotPassword;
