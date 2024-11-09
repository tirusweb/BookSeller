import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { apiGetCustomer } from "../../services/Address/Address";
import { apiGetVoucher } from "../../services/Voucher/Voucher";
import sale from "../../image/salefree.png";
import { apiPostBill } from "../../services/Bill/Bill";
import infor from "../../../src/image/inforsu.png";
import infor1 from "../../../src/image/inforfa.png";
import { toast, ToastContainer } from "react-toastify";

const Pay = () => {
  const [customer, setCustomer] = useState([]);
  const [voucher, setVoucher] = useState([]);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );
  const [isPopup, setShowPopup] = useState(false);
  const [isFalse , setShowFalse] = useState(false);
  const location = useLocation();
  const { selectedBooks, totalAmount } = location.state || {};
  const [saleOf, setSaleOf] = useState("");
  const [quality, setQuality] = useState([]);
  const [ship, setShip] = useState(30000);
  const [method, setMethod] = useState("");
  const [total, setTotal] = useState([]);
  const [idcus, setIdcus] = useState("");
  const [image, setImage] = useState([]);
  const [title, setTitle] = useState([]);
  const [price, setPrice] = useState([]);

  const navigate = useNavigate();
  const handleChange = (idcus) => {
    localStorage.setItem("selectedIdcus", idcus);
    navigate("/thay-doi-dia-chi");
  };

  // lấy số lượng và id đơn hàng
  useEffect(() => {
    if (selectedBooks && selectedBooks.length > 0) {
      const newQuantities = selectedBooks.map((cart) => cart.quantity);
      const newimage = selectedBooks.map((cart) => cart.image_cart);
      const newtitle = selectedBooks.map((cart) => cart.title);
      const newprice = selectedBooks.map((cart) => cart.price);

      const totalPrice = selectedBooks.map((cart) => {
        return cart.price * cart.quantity - (30000 / selectedBooks.length);
      }, 0);


      setQuality(newQuantities);
      setTotal(totalPrice);
      setImage(newimage);
      setTitle(newtitle);
      setPrice(newprice);
    }
  }, [selectedBooks]);

  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await apiGetCustomer(username);
        console.log(response.data);
        if (response.data.status === 1) {
          setCustomer(response.data.customer);
          console.log("Customer", response.data.customer.idcus);

        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải thông tin khách hàng. Vui lòng thử lại.");
      }
    };
    fetchCustomer();
  }, [username]);

  

  // lấy id khách hàng
  useEffect(() => {
    if (Array.isArray(customer) && customer.length > 0) {
      // Lấy idcus đầu tiên từ mảng customer
      setIdcus(customer[0].idcus);
    } else {
      // Nếu không có customer, có thể đặt idcus là null hoặc giá trị mặc định
      setIdcus(null); 
    }
  }, [customer]);

  const handleSuccess = () => {
    setShowPopup(false);
    navigate("/")
  }

  
  
  const handleAddBill = async () => {
    if(method === "" ){
      toast.error("Vui lòng chọn phương thức thanh toán")
      return;
    }
    if(idcus === null ){
      toast.error("Vui lòng quay lại điền thông tin địa chỉ")
      return;
    }

    const data = {
      quality, // Mảng chất lượng
      method,
      ship,
      total, // Mảng tổng giá
      idcus,
      status: "Đã đặt",
      image,
      title,
      price, 
    };
  
    console.log("data", data);
  
    try {
      const response = await apiPostBill(data);
      console.log("Response from server:", response);
      if (response.status === 1) {
       setShowPopup(true);
      } else {


      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error.message);
      setError("Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại.");
    }
  };

  // Api địa chỉ khách hàng
  useEffect(() => {
    const fetchCustomer = async () => {
      try {
        const response = await apiGetCustomer(username);
        console.log(response.data);
        if (response.data.status === 1) {
          setCustomer(response.data.customer);
          console.log("Customer", response.data.customer.idcus);

        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải thông tin khách hàng. Vui lòng thử lại.");
      }
    };
    fetchCustomer();
  }, [username]);

  // API voucher
  useEffect(() => {
    const fetchVoucher = async () => {
      try {
        const response = await apiGetVoucher(username);
        console.log(response.data);
        if (response.data.status === 1) {
          setVoucher(response.data.customer);
        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải thông tin khách hàng. Vui lòng thử lại.");
      }
    };
    fetchVoucher();
  }, [username]);

  const totalPrice = totalAmount + 30000 - saleOf;

  return (
    <div className="">
    <ToastContainer position="top-right" />
      <div className="w-screen">
        <div className="mx-14 my-8">
          <div className="grid grid-cols-10 gap-2">
            <div className=" col-span-10 bg-white rounded shadow-lg">
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
                  thanh toán hóa đơn
                </h2>
              </div>
            </div>
            <div className=" col-span-10 bg-white rounded hover:bg-gray-100  shadow-lg">
              {customer.slice(0,1).map((cus) => (
                <div
                  onClick={() => handleChange(cus.idcus)}
                  key={cus.idcus}
                  className="  flex cursor-pointer items-center justify-between mx-10 my-2"
                >
                  <div>
                    <div className=" flex items-center justify-start">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="size-4 text-red-600 "
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

                      <p className=" text-sm font-medium ml-2 text-gray-700">
                        Địa chỉ nhân hàng
                      </p>
                    </div>
                    <p className=" ml-6 text-sm font-normal text-gray-500">
                      {cus.fullname} | {cus.phone}
                    </p>
                    <p className=" ml-6 text-sm font-normal text-gray-500">
                      {cus.address}
                    </p>
                    <p className=" ml-6 text-sm font-normal text-gray-500">
                      {cus.ward}-{cus.distric}-{cus.city}
                    </p>
                  </div>
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
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              ))}
            </div>
            <div className=" col-span-10 bg-white rounded shadow-lg">
              <div className=" mx-10 flex items-center justify-start">
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
                    d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>

                <h2 className=" ml-2 text-xl font-semibold text-black">
                  Danh sách sản phẩm đã chọn
                </h2>
              </div>
              {selectedBooks && selectedBooks.length > 0 ? (
                <div>
                  {selectedBooks.map((cart) => (
                    <div key={cart.id} className=" mx-10 my-2">
                      <div className=" flex items-center justify-start">
                        <img
                          className=" w-[100px] "
                          src={`/image/${cart.image_cart}`}
                          alt="cart"
                        />
                        <div>
                          <p className="text-xs font-normal">{cart.title}</p>
                          <div className="flex items-center space-x-2">
                            <span className="text-black-500 text-sm font-medium">
                              {Number(cart.price).toLocaleString("vi-VN")} đ
                            </span>
                          </div>
                        </div>
                        <div className=" ml-[100px]">
                          <p className="text-xs font-medium">
                            {" "}
                            Số lượng: {cart.quantity}
                          </p>
                          <div className="flex items-center space-x-2">
                            <span
                              setTotal={
                                Number(cart.price) * Number(cart.quantity)
                              }
                              className="text-red-500 text-sm font-medium"
                            >
                              Thành tiền:{" "}
                              {(
                                Number(cart.price) * Number(cart.quantity)
                              ).toLocaleString("vi-VN")}{" "}
                              đ
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p>No books selected.</p>
              )}
            </div>
            <div className=" col-span-10 bg-white rounded shadow-lg">
              <div className=" mx-10 pt-2 flex items-center justify-start">
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
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>

                <h2 className=" ml-2 text-xl font-semibold text-black">
                  Danh sách vouchers
                </h2>
              </div>
              <div className=" flex items-center my-2 justify-start">
                {voucher.map((vou) => (
                  <div
                    onClick={() => {
                      if (totalAmount > vou.limit) {
                        setSaleOf(vou.saleof);
                      } else {
                        setSaleOf(0);
                      }
                    }}
                    key={vou.idvou}
                    className=" mx-2 pr-4 border border-solid border-gray-200 flex items-center justify-start "
                  >
                    <img src={sale} className=" w-[80px]" alt="Ảnh sale" />
                    <div className=" ">
                      <label
                        className="block font-medium text-sm text-red-600"
                        htmlFor={`voucher-${vou.idvou}`}
                      >
                        Mã giảm giá:{" "}
                        {Number(vou.saleof).toLocaleString("vi-VN")} đ
                      </label>
                      <label
                        className=" text-xs font-normal "
                        htmlFor={`voucher-${vou.idvou}`}
                      >
                        {" "}
                        Đơn tối thiểu{" "}
                        {Number(vou.limit).toLocaleString("vi-VN")} đ
                      </label>
                    </div>
                    <input
                      id={`voucher-${vou.idvou}`}
                      name="voucher"
                      value={saleOf}
                      onChange={(e) => setSaleOf(e.target.value)}
                      type="radio"
                      className=" ml-4"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className=" py-3 col-span-10 bg-white rounded shadow-lg">
              <div className=" mx-10 flex items-center justify-start">
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
                  />
                </svg>

                <h2 className=" ml-2 text-xl font-semibold text-black">
                  Hình thức thanh toán
                </h2>
              </div>
              <div className="flex ml-12 items-center my-2 justify-start">
                <input
                  id="thanhtoancod"
                  name="payment"
                  value="Thanh toán khi nhận hàng"
                  onChange={(e) => setMethod(e.target.value)}
                  type="radio"
                  className="ml-4"
                />
                <label
                  className=" ml-2 block font-medium text-sm text-red-600"
                  htmlFor="thanhtoancod"
                >
                  Thanh toán khi nhân hàng
                </label>
              </div>
            </div>
            <div className=" py-3 col-span-10 bg-white rounded shadow-lg">
              <div className=" mx-10 flex items-center justify-start">
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
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <h2 className=" ml-2 text-xl font-semibold text-black">
                  Chi tiết thanh toán
                </h2>
              </div>

              <div>
                <div className=" mt-4 flex items-center justify-between mx-48">
                  <p className=" text-sm font-medium text-gray-500  ">
                    Tổng tiền hàng{" "}
                  </p>
                  <p className=" font-medium text-sm text-gray-500">
                    {Number(totalAmount).toLocaleString("vi-VN")} đ
                  </p>
                </div>
                <div className=" mt-4 flex items-center justify-between mx-48">
                  <p className=" text-sm font-medium text-gray-500  ">
                    Tổng tiền phí vận chuyển{" "}
                  </p>
                  <p className=" font-medium text-sm text-gray-500">
                    {Number(30000).toLocaleString("vi-VN")} đ
                  </p>
                </div>
                <div className=" mt-4 flex items-center justify-between mx-48">
                  <p className=" text-sm font-medium text-gray-500  ">
                    Tổng voucher giảm giá{" "}
                  </p>
                  <p className=" font-medium text-sm text-gray-500">
                    -{Number(saleOf).toLocaleString("vi-VN")} đ
                  </p>
                </div>
                <div className=" mt-4 flex items-center justify-between mx-48">
                  <p className=" text-sm font-medium text-gray-500  ">
                    Tổng thanh toán{" "}
                  </p>
                  <p className=" font-medium text-xl text-red-600">
                    {Number(totalPrice).toLocaleString("vi-VN")} đ
                  </p>
                </div>
                <div className=" mt-4 flex items-center justify-between mx-48">
                  <p className=" text-sm font-medium text-gray-500  ">
                    Nhấn "Đặt hàng" đồng nghĩa với bạn đồng ý với các điều khoản
                    của chúng tôi{" "}
                  </p>
                  <button
                    onClick={handleAddBill}
                    className=" hover:bg-red-500 font-bold rounded shadow-lg text-white py-2 text-sm px-8 bg-red-600 "
                  >
                    Đặt hàng
                  </button>
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
              <p className=" font-semibold text-xl text-gray-600"> Đã đặt hàng thành công </p>
            </div>
            <div className="flex justify-center mt-4">
              <button
                onClick={handleSuccess}
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
              
              <p className=" font-semibold text-xl text-gray-600"> Vui lòng chọn hình thức thanh toán </p>
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
   
  );
};

export default Pay;
