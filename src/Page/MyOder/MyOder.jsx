import React, { useEffect, useState } from "react";
import {apiGetMyOder} from "../../services/Myoder/Myoder"
import { apiGetCustomer } from "../../services/Address/Address";


const MyOder = () => {
  const [myoder, setMyoder] = useState([]);
  const [error, setError] = useState(null);
  const [customer, setCustomer] = useState(0);
  const [idcus , setIdcus] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await apiGetCustomer(username);
        console.log(response.data);
        if (response.data.status === 1) {
          setCustomer(response.data.customer);

        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải thông tin khách hàng. Vui lòng thử lại.");
      }
    };
    fetchCustomer();
  }, [username]);

  
  useEffect(() => {
    if (Array.isArray(customer) && customer.length > 0) {
      setIdcus(customer[0].idcus);
    } else {
      setIdcus(null); 
    }
  }, [customer]);
  

  useEffect(() => {
      const fetchOrder = async () => {
          try {
              const response = await apiGetMyOder(idcus); // Gọi API
              if (response.data.status === 1) {
                  setMyoder(response.data.books); // Cập nhật danh sách đơn hàng
              } else {
                  setError(response.data.msg); // Lưu thông báo lỗi
              }
          } catch (error) {
              setError("Lỗi khi gọi API");
              console.error("Lỗi khi gọi API:", error);
          }
      };
  
      if (idcus) { // Kiểm tra xem customer có tồn tại không
          fetchOrder();
      }
  }, [idcus]); 

  return (
    <>
      <div className=" w-screen ">
        <div className=" mx-14 my-8">
          <div className=" grid grid-cols-10 gap-2">
            <div className="col-span-10 bg-white rounded shadow-lg">
              <div className=" flex items-center justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="size-6 text-red-600 ml-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <h2 className=" text-xl ml-4 uppercase py-2 font-bold text-red-600 ">
                  {" "}
                  Đơn hàng của tôi
                </h2>
              </div>
              <div className=" border border-solid border-gray-200 mt-2"></div>
              <div className=" overflow-x-auto w-full">
                <table className=" overflow-x-auto border border-gray-200 table-fixed xs:w-[900px]  lg:w-full">
                  <thead>
                    <tr className="py-4 bg-red-500">
                      <th
                        colSpan={1}
                        className="text-center border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                      >
                        STT
                      </th>
                      <th
                        colSpan={4}
                        className="text-center border-r text-sm uppercase border-white  border-solid px-3  text-white tracking-wider"
                      >
                        Thông tin sách
                      </th>
                      <th
                        colSpan={1}
                        className="text-center border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                      >
                        số lượng
                      </th>
                      <th
                        colSpan={2}
                        className="text-center border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                      >
                        hình thức thanh toán
                      </th>
                      <th
                        colSpan={2}
                        className="text-center border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                      >
                        trạng thái đơn hàng
                      </th>
                      <th
                        colSpan={2}
                        className="text-center  border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                      >
                        Tổng tiền
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myoder.map((oder, index) => (
                      <tr key={oder.id} className="cursor-pointer bg-white hover:bg-red-100">
                        <td
                          colSpan={1}
                          className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {index+1}
                        </td>
                        <td
                          colSpan={4}
                          className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          <div className=" flex items-center justify-start">
                            <img className=" w-[80px] "  src={`/image/${oder.image}`} alt="ảnh sản phẩm"/>
                            <div className=" ml-2">
                              <p className=" font-normal text-gray-600 text-sm text-left">{oder.title}</p>
                             <p className=" text-left font-medium text-red-500 text-sm"> {Number(oder.price).toLocaleString("vi-VN")}{" "}
                             đ</p>
                             <p className=" text-sm font-normal text-gray-400 ">Thời gian đặt : {oder.updated_at}</p>
                            </div>
                          </div>
                        </td>
                        <td
                          colSpan={1}
                          className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xl text-center"
                        >{oder.quality}</td>
                        <td
                          colSpan={2}
                          className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {oder.method}
                        </td>
                        <td
                          colSpan={2}
                          className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >{oder.status}</td>
                        <td
                          colSpan={2}
                          className="py-3 pl-2 font-bold text-red-500 lg:text-xl border border-solid border-gray-200  xs:text-xs text-center"
                        >
                           {Number(oder.total).toLocaleString("vi-VN")}{" "}
                           đ
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyOder;
