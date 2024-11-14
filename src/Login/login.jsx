import React, { useState } from "react";
import pia from "../image/login3.jpg";
import { apiLoginUser } from "../services/User/User";
import { useNavigate } from "react-router-dom"; 

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [error, setError] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    try {
      const response = await apiLoginUser(username, password);
      if (response.data.status === 1) {
        localStorage.setItem("user", username);
        onLogin(); 
        navigate("/");
      } else {
        setError(response.data.msg);
      }
    } catch (error) {
      setError("Đã xảy ra lỗi khi đăng nhập. Vui lòng thử lại."); 
    }
  };

  return (
    <>
      {/* Giao diện đăng nhập */}
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
                <h2 className="text-center mt-20 text-white font-bold">
                  ĐĂNG NHẬP TÀI KHOẢN
                </h2>

                <div className="flex-col flex items-center justify-center">
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Tên tài khoản..."
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-4 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Mật khẩu đăng nhập..."
                  />

                  <div className="w-[90%] mt-2 flex items-center justify-between">
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        className="bg-cyan-400 border-cyan-500"
                        type="checkbox"
                      />
                      <span className="ml-2 text-sm font-medium text-white">
                        Ghi nhớ tôi
                      </span>
                    </label>
                    <a
                      className="text-sm font-medium text-white"
                      href="/quen-mat-khau"
                    >
                      Quên mật khẩu
                    </a>
                  </div>

                  {error && (
                    <p className="text-red-600 text-sm font-medium text-left mt-2">
                      {error}
                    </p>
                  )}
                  <button
                    onClick={handleSubmit}
                    className="w-[90%] px-4 py-2 mt-4 bg-cyan-500 text-white font-bold rounded-md hover:text-cyan-500 hover:bg-white"
                  >
                    Đăng nhập
                  </button>
                  <div className="flex items-center mt-2">
                    <p className="text-white text-sm">Bạn chưa có tài khoản?</p>
                    <a
                      href="/register"
                      className="text-sm ml-2 font-medium text-cyan-900 hover:text-white"
                    >
                      Đăng ký
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
