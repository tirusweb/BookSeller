import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  apiGetCustomer,
  apiPostCustomer,
} from "../../services/Address/Address";

import infor from "../../../src/image/inforsu.png";
import infor1 from "../../../src/image/inforfa.png";

const Address = () => {
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );
  const [isPopup, setShowPopup] = useState(false);
  const [isFalse, setShowFalse] = useState(false);
  const [isCity, setIsCity] = useState("");
  const [isDistrict, setIsDistrict] = useState("");
  const [isWard, setIsWard] = useState("");
  const [fullname, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const handleInfor = () => {
    navigate("/ho-so-ca-nhan");
  };

  const handleChang = () => {
    navigate("/doi-mat-khau");
  };

  const handleAddress = () => {
    navigate("/dia-chi");
  };



  // Fetch city data (tỉnh/thành phố)
  useEffect(() => {
    const fetchCity = async () => {
      try {
        const response = await axios.get(
          "https://esgoo.net/api-tinhthanh/1/0.htm"
        );
        if (response && response.data && response.data.data) {
          setCity(response.data.data);
        }
      } catch (error) {
        setError("Lỗi khi gọi Api");
      }
    };
    fetchCity();
  }, []);

  useEffect(() => {
    if (isCity) {
      const fetchDistrict = async () => {
        try {
          const response = await axios.get(
            `https://esgoo.net/api-tinhthanh/2/${isCity.id}.htm`
          );
          if (response && response.data && response.data.data) {
            setDistrict(response.data.data);
          }
        } catch (error) {
          setError("Lỗi khi gọi Api");
        }
      };
      fetchDistrict();
    }
  }, [isCity]);

  // phường xã
  useEffect(() => {
    if (isDistrict) {
      const fetchDistrict = async () => {
        try {
          const response = await axios.get(
            `https://esgoo.net/api-tinhthanh/3/${isDistrict.id}.htm`
          );
          if (response && response.data && response.data.data) {
            setWard(response.data.data);
          }
        } catch (error) {
          setError("Lỗi khi gọi Api");
        }
      };
      fetchDistrict();
    }
  }, [isDistrict]);

  const handleAddCus = async () => {
    const data = {
      fullname,
      phone,
      address,
      city: isCity ? isCity.full_name : "",
      distric: isDistrict ? isDistrict.full_name : "",
      ward: isWard ? isWard.full_name : "",
      username,
    };
    try {
      const response = await apiPostCustomer(data);
      if (response.data.status === 1) {
       setShowPopup(true);
       localStorage.setItem("idcus" , response.data.idcus);
       console.log(response.data.idcus);
      } else {
        setShowFalse(true)
      }
    } catch (error) {
      setError("lỗi API ");
    }
  };

  return (
    <>
      <div className="w-screen">
        <div className="mx-14 my-8">
          <div className="grid grid-cols-10 gap-4">
            <div className="col-span-3 row-span-1">
              <div className="bg-white rounded shadow-lg">
                <div className="pl-2 py-2 flex items-center justify-between">
                  <div className="flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-4 text-red-600"
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
                <p
                  onClick={handleInfor}
                  className="pl-8 py-2 cursor-pointer font-medium text-xs hover:bg-red-200"
                >
                  Hồ sơ cá nhân
                </p>
                <p
                  onClick={handleAddress}
                  className="pl-8 py-2 cursor-pointer font-medium text-xs bg-red-500 text-white"
                >
                  Thông tin địa chỉ
                </p>
                <p
                  onClick={handleChang}
                  className="pl-8 py-2 cursor-pointer font-medium text-xs hover:bg-red-200"
                >
                  Đổi mật khẩu
                </p>
              </div>
            </div>
            <div className="col-span-7 bg-white rounded shadow-lg">
                <div className="w-full">
                  <div className=" flex my-4 items-center mx-4 justify-start ">
                    <p className=" ml-6 w-2/6 text-sm font-medium ">
                      {" "}
                      Họ và tên{" "}
                    </p>
                    <input
                      value={fullname}
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                      className="w-3/6 border py-2 px-4 rounded border-solid border-gray-300 outline-cyan-200"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div className=" flex my-4 items-center mx-4 justify-start ">
                    <p className=" ml-6 w-2/6 text-sm font-medium ">
                      {" "}
                      Số điện thoại{" "}
                    </p>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className=" w-3/6 border py-2 px-4 rounded  border-solid border-gray-300 outline-cyan-200 "
                      placeholder=" Nhập số điện thoại .."
                    />
                  </div>
                  <div className="flex my-4 items-center mx-4 justify-start">
                    <p className="ml-6 w-2/6 text-sm font-medium">
                      Tỉnh / Thành phố
                    </p>
                    <select
                     
                      onChange={(e) => {
                        const selectedCity = city.find(
                          (cityItem) => cityItem.id === e.target.value
                        );
                        setIsCity(selectedCity);
                      }}
                      className="w-3/6 border py-2 px-4 rounded border-solid border-gray-300 outline-cyan-200"
                    >
                      <option value="">
                        {" "}
                         Chọn tỉnh / thành phố{" "}
                      </option>
                      {city.map((cityItem, index) => (
                        <option key={index} value={cityItem.id}>
                          {cityItem.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex my-4 items-center mx-4 justify-start">
                    <p className="ml-6 w-2/6 text-sm font-medium">
                      Quận / Huyện
                    </p>
                    <select
                      onChange={(e) => {
                        const selectedDic = district.find(
                          (districtItem) => districtItem.id === e.target.value
                        );
                        setIsDistrict(selectedDic);
                      }}
                      className="w-3/6 border py-2 px-4 rounded border-solid border-gray-300 outline-cyan-200"
                    >
                      <option value="">
                        {" "}
                       Chọn quận / huyện
                      </option>
                      {district.map((districtItem, index) => (
                        <option key={index} value={districtItem.id}>
                          {districtItem.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex my-4 items-center mx-4 justify-start">
                    <p className="ml-6 w-2/6 text-sm font-medium">
                      Phường / xã
                    </p>
                    <select
                      onChange={(e) => {
                        const selectedWard = ward.find(
                          (warditem) => warditem.id === e.target.value
                        );
                        setIsWard(selectedWard);
                      }}
                      className="w-3/6 border py-2 px-4 rounded border-solid border-gray-300 outline-cyan-200"
                    >
                      <option value="">
                        {" "}
                       Chọn Phường / xã{" "}
                      </option>
                      {ward.map((warditem, index) => (
                        <option key={index} value={warditem.id}>
                          {warditem.full_name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className=" flex my-4 items-center mx-4 justify-start ">
                    <p className=" ml-6 w-2/6 text-sm font-medium ">
                      {" "}
                      Địa chỉ{" "}
                    </p>
                    <input
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className=" w-3/6 border py-2 px-4 rounded  border-solid border-gray-300 outline-cyan-200 "
                      placeholder=" Nhập địa chỉ .."
                    />
                  </div>
                  <div className=" flex my-6 items-center justify-center">
                   
                    <button
                      onClick={handleAddCus}
                      className=" text-white font-semibold text-sm hover:bg-red-500 bg-red-600 py-2 px-6 rounded-lg shadow-lg"
                    >
                      Thêm địa chỉ
                    </button>
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
               Thêm địa chỉ thành công{" "}
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
                 Vui lòng nhập đầy đủ{" "}
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
      </div>
    </>
  );
};

export default Address;
