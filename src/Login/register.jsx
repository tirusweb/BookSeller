import React, { useState } from "react";
import pia from "../image//login3.jpg";
import { apiPostUser } from "../services/User/User";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // To show success popup
  const navigate = useNavigate();
  

  const validateEmail = (email) => {
    const re =  /^\S+@\S+\.\S+$/;
    return re.test(email);
  };
  const handleSubmit = async () => {
    if (!name || !email ||!address || !fullname || !phone || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin.");
      return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const regexPhoneNumber = /(0|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!password.match(passwordRegex)) {
      setError("Mật khẩu mới phải có ít nhất 8 ký tự, bao gồm cả chữ thường , chữ in hoa và số.");
      return;
  }
  if (!phone.match(regexPhoneNumber)) {
    setError("Nhập sai số điện thoại.");
    return;
}
    if (!validateEmail(email)) {
      setError("Email không hợp lệ.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu nhập lại không khớp.");
      return;
    }
    const data = { name, fullname ,address, phone, email, password };

    try {
      const response = await apiPostUser(data);
      if (response.status === 1) {
        setShowSuccessPopup(true);
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(response.msg);
      }
    } catch (error) {
      setError("Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    }
  };

  return (
    <>
      <div className="w-screen flex items-center justify-center h-screen bg-blue-100">
        <div className="lg:w-[94%] lg:h-[94%] xs:w-[100%] xs:h-[100%] my-0 mx-auto bg-cyan-400 shadow-xl rounded">
          <div className="h-full grid grid-cols-5">
            <div className="lg:block xs:hidden col-span-3">
              <div className="flex-col flex items-center justify-center h-full bg-white">
                <h2 className="text-center uppercase font-bold text-cyan-500">
                  CHÀO BẠN ĐỌC ĐẾN VỚI BOOKHUH.COM
                </h2>
                <img src={pia} className="lg:w-[500px] h-auto" alt="Edu" />
              </div>
            </div>
            <div className="h-full w-full flex items-center justify-center xs:col-span-5 lg:col-span-2">
              <div className="h-[96%] w-[96%] bg-cyan-600 shadow-xl lg:mx-auto lg:my-0 rounded-xl">
                <h2 className="lg:hidden xs:block mt-3 text-center font-bold text-cyan-800">
                  CHÀO BẠN ĐỌC ĐẾN VỚI BOOKHUH.COM
                </h2>
                <h2 className="text-center uppercase mt-2 text-white font-bold">
                  ĐĂNG Ký TÀI KHOẢN
                </h2>

                <div className="flex-col flex items-center justify-center">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Tên người dùng..."
                    required
                  />
                    <input
                    type="email"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Nhập họ tên..."
                    required
                  />
                    <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Nhập số điện thoại..."
                    required
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Nhập email..."
                    required
                  />
                   <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Nhập địa chỉ..."
                    required
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                    placeholder="Mật khẩu..."
                    required
                  />
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-[90%] px-4 py-2 mt-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-cyan-500"
                   placeholder="Xác nhận mật khẩu..."
                   required
                  />

                  {error && (
                    <p className="text-red-600 text-sm font-medium text-left mt-0">
                      {error}
                    </p>
                  )}

                  {showSuccessPopup && (
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg">
                      <h3 className="text-green-600 text-lg font-bold">
                        Đăng ký thành công!
                      </h3>
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    className="w-[90%] px-4 py-2 mt-2 bg-cyan-500 text-white font-bold rounded-md hover:text-cyan-500 hover:bg-white"
                  >
                    Đăng Ký
                  </button>
                  <div className="flex items-center mt-2">
                    <p className="text-white text-sm">Bạn đã có tài khoản?</p>
                    <a
                      href="/login"
                      className="text-sm ml-2 font-medium text-cyan-900 hover:text-white"
                    >
                      Đăng nhập
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

export default Register;
