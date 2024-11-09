import React, { useEffect, useState } from "react";
import { apiGetMyOder, apiUpdateBill } from "../../services/Myoder/Myoder";
import { apiGetCustomer } from "../../services/Address/Address";
import { toast, ToastContainer } from "react-toastify";

const MyOder = () => {
  const [myoder, setMyoder] = useState([]);
  const [error, setError] = useState(null);
  const [customer, setCustomer] = useState(0);
  const [idcus, setIdcus] = useState("");
  const [lido , setLido] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [isShowPopupOpen, setShowPopupOpen] = useState(false);
  const [idbill, setIdBill] = useState(null);

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
   
    
      fetchOrder();
  }, [idcus]);

  const openDeletePopup = (id) => {
    setIdBill(id);
    setDeletePopupOpen(true);
  };
  const openShowPopup = (id) => {
    setIdBill(id);
    setShowPopupOpen(true);
  };

  const handleDelete = async () => {
    if(lido === ""){
      toast.error("Vui lòng nhập lý do hủy");
      return;
    }
    try {
      const status = "Đã hủy"
      const response = await apiUpdateBill(idbill , status);
      if (response.data.status === 1) {
        toast.success(" Cập nhật trạng thái thành công ");
        setDeletePopupOpen(false);
      } else {
        toast.success(" Cập nhật trạng thái thất bại ");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sách:", error);
    }
  };

  const handleUpdate = async () => {
   
    try {
      const status = "Đã giao"
      const response = await apiUpdateBill(idbill , status);
      if (response.data.status === 1) {
        toast.success(" Cập nhật trạng thái thành công ");
        setDeletePopupOpen(false);
      } else {
        toast.success(" Cập nhật trạng thái thất bại ");
      }
    } catch (error) {
      console.error("Lỗi khi xóa sách:", error);
    }
  };
 
  const cancelUpdate = () => {
    setShowPopupOpen(false);
  };
  const cancelDelete = () => {
    setDeletePopupOpen(false);
  };


  return (
    <>
      <div className=" w-screen ">
      <ToastContainer position="top-right" />
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
                      <th
                        colSpan={2}
                        className="text-center  border-r text-sm uppercase border-white border-solid px-3  text-white tracking-wider"
                      >
                        công cụ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {myoder.map((oder, index) => (
                      <tr key={oder.id} className="cursor-pointer bg-white ">
                        <td
                          colSpan={1}
                          className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {index + 1}
                        </td>
                        <td
                          colSpan={4}
                          className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          <div className=" flex items-center justify-start">
                            <img
                              className=" w-[80px] "
                              src={`/image/${oder.image}`}
                              alt="ảnh sản phẩm"
                            />
                            <div className=" ml-2">
                              <p className=" font-normal text-gray-600 text-sm text-left">
                                {oder.title}
                              </p>
                              <p className=" text-left font-medium text-red-500 text-sm">
                                {" "}
                                {Number(oder.price).toLocaleString("vi-VN")} đ
                              </p>
                              <p className=" text-sm font-normal text-gray-400 ">
                                Thời gian đặt : {oder.updated_at}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td
                          colSpan={1}
                          className="py-3 pl-2 font-normal text-gray-500 lg:text-sm border border-solid border-gray-200  xs:text-xl text-center"
                        >
                          {oder.quality}
                        </td>
                        <td
                          colSpan={2}
                          className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {oder.method}
                        </td>
                        <td
                          colSpan={2}
                          className="py-3 pl-2 font-medium text-gray-600 lg:text-sm border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {oder.status}
                        </td>
                        <td
                          colSpan={2}
                          className="py-3 pl-2 font-bold text-red-500 lg:text-xl border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          {Number(oder.total).toLocaleString("vi-VN")} đ
                        </td>
                        <td
                          colSpan={2}
                          className="py-3 pl-2 font-bold text-red-500 lg:text-xl border border-solid border-gray-200  xs:text-xs text-center"
                        >
                          <div className=" block">
                            <div
                               onClick={() => openShowPopup(oder.idbill)}
                              className=" cursor-pointer"
                            >
                              <button className=" rounded hover:bg-green-700  shadow-lg font-medium text-white bg-green-600 px-2 py-1 text-xs ">
                                Đã nhận hàng
                              </button>
                            </div>

                            <div
                              onClick={() => openDeletePopup(oder.idbill)}
                              className=" cursor-pointer"
                            >
                              <button className=" rounded hover:bg-red-700  shadow-lg font-medium text-white bg-red-600 px-2 py-1 text-xs ">
                                Hủy đơn hàng
                              </button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        {isDeletePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Bạn có chắc chắn muốn hủy đơn hàng  này không?</p>

            <input 
            className=" border border-gray-100 text-sm text-black font-normal mt-2 px-4 py-2 w-[400px] outline-red-500"
            value={lido}
              onChange={(e) => setLido(e.target.value)}
              placeholder="Nhập lý do hủy đơn hàng"
            />
            <div className="flex justify-end mt-4">
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-2 rounded mr-2"
              >
                Hủy
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Xác nhận
              </button>
            </div>
          </div>
        </div>
      )}
      {isShowPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Bạn đã nhận được đơn hàng ?</p>

          
            <div className="flex justify-end mt-4">
              <button
                onClick={cancelUpdate}
                className="bg-gray-300 px-4 py-2 rounded mr-2"
              >
                Hủy
              </button>
              <button
                onClick={handleUpdate}
                className="bg-red-500 text-white px-4 py-2 rounded"
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

export default MyOder;
