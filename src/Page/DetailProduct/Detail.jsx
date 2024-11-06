import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiPostCart } from "../../services/Cartbook/Cartbook";

import Modalgh from "./Modal/Modalgh";
import Modaldt from "./Modal/Modaldt";
import Modalks from "./Modal/Modalks";

import infor from "../../../src/image/inforsu.png";
import infor1 from "../../../src/image/inforfa.png";
import { apigetDetailBook } from "../../services/detailBook/detaiBook";
const Detail = () => {
  const [detail, setDetail] = useState([null]);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalgh, setIsShowModalgh] = useState(false);
  const [isModaldt, setIsShowModaldt] = useState(false);
  const [isModalks, setIsShowModalks] = useState(false);
  const [isPopup, setShowPopup] = useState(false);
  const [isFalse, setShowFalse] = useState(false);
  const navigate = useNavigate();

  // thêm vào giỏ hàng

  const [image_cart, setImage_cart] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [priceold, setpriceold] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );

  const totalSlides = 2;

  const { id } = useParams();

  const changeSlide = (direction) => {
    setCurrentSlide((prev) => {
      const newIndex = prev + direction;
      if (newIndex < 0) return totalSlides - 1;
      if (newIndex >= totalSlides) return 0;
      return newIndex;
    });
  };
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleSuccess = () => {
    setShowPopup(false);
    window.location.reload();
  };

  useEffect(() => {
    // Cuộn lên đầu trang
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await apigetDetailBook(id);
        console.log(response.data);

        if (response.data.status === 1) {
          setDetail(response.data.book); // Sử dụng 'book' cho nhất quá
          setImage_cart(response.data.book.image);
          settitle(response.data.book.title);
          setprice(response.data.book.price);
          setpriceold(response.data.book.priceold);
        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải chi tiết sách. Vui lòng thử lại.");
        console.error("Lỗi khi gọi API:", error.message);
      }
    };

    fetchBooks();
  }, [id]);

  const handleAddCart = async () => {
    const data = {
      image_cart,
      title,
      price,
      priceold,
      username,
    };

    try {
      const response = await apiPostCart(data); // Gửi dữ liệu lên API thêm giỏ hàng
      if (response.status === 1) {
        setShowPopup(true);
      } else {
        setShowFalse(true);
      }
    } catch (error) {
      setError(
        "Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại."
      );
      console.error("Lỗi khi thêm sản phẩm:", error.message);
    }
  };
  const handleBuyNow = async () => {
    const data = {
      image_cart,
      title,
      price,
      priceold,
      username,
    };

    try {
      const response = await apiPostCart(data); // Gửi dữ liệu lên API thêm giỏ hàng
      if (response.status === 1) {
        navigate("/gio-hang-san-pham");
      } else {
        alert("Thêm sản phẩm vào giỏ hàng thất bại!");
      }
    } catch (error) {
      setError(
        "Đã xảy ra lỗi khi thêm sản phẩm vào giỏ hàng. Vui lòng thử lại."
      );
      console.error("Lỗi khi thêm sản phẩm:", error.message);
    }
  };

  const openModalgh = () => setIsShowModalgh(true);
  const closeModalgh = () => setIsShowModalgh(false);
  // open modal Chính sách đổi trả
  const openModaldt = () => setIsShowModaldt(true);
  const closeModaldt = () => setIsShowModaldt(false);
  // open modal chính sách khách sĩ
  const openModalks = () => setIsShowModalks(true);
  const closeModalks = () => setIsShowModalks(false);

  return (
    <div className="">
      <div className=" w-screen">
        <div className=" mx-14 my-8">
          <div className="">
            {error && <div className="text-red-500">{error}</div>}
            {detail ? ( // Kiểm tra nếu detail không null
              <div className="grid grid-cols-10 gap-2 ">
                <div className="col-span-3 row-span-3 rounded bg-white shadow-lg">
                  <div
                    className="relative w-full "
                    id="carouselExampleIndicators"
                  >
                    <div className="relative overflow-hidden">
                      <div
                        className="flex transition-transform duration-500"
                        style={{
                          transform: `translateX(-${currentSlide * 100}%)`,
                        }}
                      >
                        <div className="carousel-item w-full flex-shrink-0">
                          <img
                            src={`/image/${detail.imagedt}`}
                            className="block w-full h-[400px]"
                            alt="Course 2"
                          />
                        </div>
                        <div className="carousel-item w-full flex-shrink-0">
                          <img
                            src={`/image/${detail.image}`}
                            className="block w-full"
                            alt="Course 1"
                          />
                        </div>
                      </div>
                    </div>

                    <button
                      className="absolute flex items-center top-1/2 left-[-12px] z-10 p-2 w-8 h-8 bg-white cursor-pointer outline-none rounded-full"
                      onClick={() => changeSlide(-1)}
                    >
                      &#10094;
                    </button>

                    <button
                      className="absolute flex items-center top-1/2 right-[-12px] z-10 p-2 w-8 h-8 bg-white cursor-pointer outline-none rounded-full"
                      onClick={() => changeSlide(1)}
                    >
                      &#10095;
                    </button>

                    <div className="flex justify-center absolute top-[90%] left-[40%] mt-4">
                      {Array.from({ length: totalSlides }).map((_, index) => (
                        <button
                          key={index}
                          className={`w-3 h-3 mx-1 rounded-full ${
                            currentSlide === index
                              ? "bg-red-500"
                              : "bg-gray-300"
                          }`}
                          onClick={() => goToSlide(index)}
                        />
                      ))}
                    </div>
                  </div>
                  <div
                    onClick={handleBuyNow}
                    className=" py-2 bg-red-600 hover:bg-red-700 cursor-pointer mt-3 mx-4 flex items-center justify-center border-2 rounded-lg border-solid border-red-600"
                  >
                    <p className=" text-white  font-medium text-xl ml-2">
                      Mua ngay
                    </p>
                  </div>
                  <div
                    onClick={handleAddCart}
                    className=" py-2 text-red-600 hover:text-red-700 cursor-pointer mt-3 mx-4 flex items-center justify-center border-2 rounded-lg border-solid border-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
                    <p className="  font-medium text-xl ml-2">
                      Thêm vào giỏ hàng
                    </p>
                  </div>
                  <div className=" mx-4 mt-4 ">
                    <p className=" font-semibold text-sm text-black">
                      Chính sách ưu đãi của Bookhub
                    </p>
                    <div
                      onClick={openModalgh}
                      className=" mt-3 cursor-pointer flex items-center justify-between"
                    >
                      <div className=" flex items-center justify-start">
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
                            d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                          />
                        </svg>
                        <p className=" ml-2 text-black font-medium text-sm">
                          {" "}
                          Thời gian giao hàng
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={openModaldt}
                      className=" mt-3 cursor-pointer flex items-center justify-between"
                    >
                      <div className=" flex items-center justify-start">
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
                            d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                          />
                        </svg>

                        <p className=" ml-2 text-black font-medium text-sm">
                          {" "}
                          Chính sách đổi trả
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={openModalks}
                      className=" mt-3 cursor-pointer flex items-center justify-between"
                    >
                      <div className=" flex items-center justify-start">
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
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v7.5m2.25-6.466a9.016 9.016 0 0 0-3.461-.203c-.536.072-.974.478-1.021 1.017a4.559 4.559 0 0 0-.018.402c0 .464.336.844.775.994l2.95 1.012c.44.15.775.53.775.994 0 .136-.006.27-.018.402-.047.539-.485.945-1.021 1.017a9.077 9.077 0 0 1-3.461-.203M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                          />
                        </svg>

                        <p className=" ml-2 text-black font-medium text-sm">
                          {" "}
                          Chính sách khách sỉ
                        </p>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m8.25 4.5 7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="col-span-7 row-span-1 rounded bg-white shadow-lg">
                  <div className=" mx-4 my-2 ">
                    <p className=" text-xl font-semibold text-black ">
                      {detail.title}
                    </p>
                    <div className=" mt-3 flex items-center justify-start">
                      <div>
                        <p className=" text-gray-500 font-normal text-sm  ">
                          {" "}
                          Nhà cung cấp:{" "}
                          <b className=" font-semibold text-sm text-black">
                            {detail.supplier}
                          </b>
                        </p>
                        <p className=" mt-2 text-gray-500 font-normal text-sm  ">
                          {" "}
                          Nhà xuất bản:{" "}
                          <b className=" font-semibold text-sm text-black">
                            {detail.nhaxuatban}
                          </b>
                        </p>
                      </div>
                      <div className=" ml-40 mt-3">
                        <p className=" text-gray-500 font-normal text-sm  ">
                          {" "}
                          Tác giả:{" "}
                          <b className=" font-semibold text-sm text-black">
                            {detail.author}
                          </b>
                        </p>
                        <p className=" mt-2 text-gray-500 font-normal text-sm  ">
                          {" "}
                          hình thức bìa:{" "}
                          <b className=" font-semibold text-sm text-black">
                            {detail.hinhthuc}
                          </b>
                        </p>
                      </div>
                    </div>
                    <div className=" mt-3 flex items-center justify-start">
                      <p className=" text-2xl font-bold text-red-600 ">
                        {" "}
                        {Number(detail.price).toLocaleString("vi-VN")} đ
                      </p>
                      <p className="text-gray-600  font-medium text-sm mx-2 line-through">
                        {" "}
                        {Number(detail.priceold).toLocaleString("vi-VN")} đ{" "}
                      </p>
                      <p className="bg-red-500 ml-2 text-sm text-white font-semibold shadow-lg rounded  px-2 py-1">
                        -{detail.sale}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-7 row-span-1 rounded bg-white shadow-lg">
                  <div className=" mx-4 my-2 ">
                    <h2 className=" font-medium text-xl text-black">
                      Thông tin chi tiết
                    </h2>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Mã hàng{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.detailid}
                      </p>
                    </div>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Tên Nhà Cung Cấp{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.supplier}
                      </p>
                    </div>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Tác giả{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.author}
                      </p>
                    </div>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Năm XB{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.namxb}
                      </p>
                    </div>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Ngôn Ngữ{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.ngonngu}
                      </p>
                    </div>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Trọng lượng (gr){" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.trongluong}
                      </p>
                    </div>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Kích Thước Bao Bì{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.size}
                      </p>
                    </div>
                    <div className=" border-b border-solid  py-2 border-gray-200 flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Số trang{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.sotrang}
                      </p>
                    </div>
                    <div className="   py-2  flex items-center justify-start">
                      <p className=" w-2/6 text-gray-500 font-normal text-sm ">
                        Hình thức{" "}
                      </p>
                      <p className=" w-4/6 text-gray-500 font-normal text-sm ">
                        {detail.hinhthuc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-7 row-span-1 rounded bg-white shadow-lg">
                  <div className=" mx-4 my-2  h-[200px] overflow-y-auto">
                    <h2 className=" font-medium text-xl text-black">
                      Mô tả sản phẩm
                    </h2>
                    <p className=" text-sm font-semibold text-black ">
                      {detail.title}
                    </p>
                    <p className="  text-sm font-normal text-gray-500">
                      {detail.mota}
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div>Đang tải chi tiết sách...</div>
            )}
          </div>
        </div>
      </div>
      {isModalgh && <Modalgh onclose={closeModalgh} />}
      {isModaldt && <Modaldt onclose={closeModaldt} />}
      {isModalks && <Modalks onclose={closeModalks} />}
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
                Đã thêm vào giỏ hàng{" "}
              </p>
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
              <img
                src={infor1}
                className=" mx-20 w-[100px] h-[100px]"
                alt="Ảnh thông báo thất bại"
              />
              <p className=" font-semibold text-xl text-gray-600">
                {" "}
                Vui lòng đăng nhập tài khoản{" "}
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
  );
};

export default Detail;
