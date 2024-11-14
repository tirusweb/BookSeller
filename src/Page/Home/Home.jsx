import React, { useEffect, useState } from "react";
import c1 from "../../image/course6.webp";
import c2 from "../../image/course5.webp";
import c3 from "../../image/course3.webp";
import c4 from "../../image/course4.webp";
import c5 from "../../image/sourse7.webp";
import banner1 from "../../image/banner1.webp";
import banner2 from "../../image/banner2.webp";
import { Link, useNavigate } from "react-router-dom";
// ảnh sale off
// API
import { getListBooks } from "../../services/Listbook/Listbook";

import sale1 from "../../image/sale.webp";
import sale2 from "../../image/sale1.webp";
import sale3 from "../../image/sale2.webp";
import sale4 from "../../image/sale3.webp";

// ảnh danh mục sản phẩm
import list1 from "../../image/list1.webp";
import list2 from "../../image/list2.webp";
import list3 from "../../image/list3.webp";
import list4 from "../../image/list4.webp";
import list5 from "../../image/list5.webp";
import list6 from "../../image/list6.webp";
import list7 from "../../image/list7.webp";
import list8 from "../../image/list8.webp";

const List = [
  {
    id: 1,
    title: "Halloween",
    image: list1,
    link: "danh-muc-thieu-nhi",
  },
  {
    id: 2,
    title: "Sách tô màu",
    image: list2,
    link: "danh-muc-thieu-nhi",
  },
  {
    id: 3,
    title: "Bài học kinh doanh",
    image: list3,
    link: "danh-muc-kinh-te",
  },
  {
    id: 4,
    title: "văn học",
    image: list4,
    link: "danh-muc-van-hoc",
  },
  {
    id: 5,
    title: "Tâm lý kĩ năng",
    image: list5,
    link: "danh-muc-ki-nang-song",
  },
  {
    id: 6,
    title: "Thiếu nhi",
    image: list6,
    link: "danh-muc-thieu-nhi",
  },
  {
    id: 7,
    title: "Sách học ngữ văn",
    image: list7,
    link: "danh-muc-van-hoc",
  },
  {
    id: 8,
    title: "Ngữ văn",
    image: list8,
    link: "danh-muc-van-hoc",
  },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  // const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // gọi API danh sách sản phẩm
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getListBooks();

        if (response.data.status === 1) {
          setBooks(response.data.books);
        } else {
          setError(response.data.msg);
        }
      } catch (error) {
        setError("Không thể tải danh sách sách. Vui lòng thử lại.");
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    // Cuộn lên đầu trang
    window.scrollTo(0, 0);
  }, []);

  // lấy id khi ấn vào sản phẩm và hiện ra trang chi tiết
  const handleDetail = (item) => {
    navigate(`/chi-tiet-san-pham/${item.id}`);
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);


 
  return (
    <div className="">
      <div className="">
        <div className=" mx-14 my-8">
          <div className="">
            <div className=" grid grid-cols-5 grid-rows-2 gap-2 ">
              <div className="col-span-3 row-span-2 rounded  z-10 shadow-xl">
                <div className="relative w-full" id="carouselExampleIndicators">
                  <div className="relative overflow-hidden">
                    <div
                      className="flex transition-transform duration-500"
                      style={{
                        transform: `translateX(-${currentSlide * 100}%)`,
                      }}
                    >
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c1} className="block w-full" alt="Course 1" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c2} className="block w-full" alt="Course 2" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c3} className="block w-full" alt="Course 3" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c4} className="block w-full" alt="Course 4" />
                      </div>
                      <div className="carousel-item w-full flex-shrink-0">
                        <img src={c5} className="block w-full" alt="Course 5" />
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

                  <div className="flex justify-center absolute top-[96%] left-[40%]">
                    {Array.from({ length: totalSlides }).map((_, index) => (
                      <button
                        key={index}
                        className={`w-3 h-3 mx-1 rounded-full ${
                          currentSlide === index ? "bg-red-500" : "bg-gray-300"
                        }`}
                        onClick={() => goToSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-span-2 rounded shadow-lg row-span-1">
                <Link to="">
                  <img src={banner1} alt="banner1" />
                </Link>
              </div>
              <div className="col-span-2 rounded shadow-lg row-span-1">
                <Link to="">
                  <img src={banner2} alt="Banner2" />
                </Link>
              </div>
            </div>
            <div className=" grid grid-cols-4 mt-4 gap-4">
              <div className=" col-span-1 shadow-lg">
                <Link to="">
                  <img src={sale1} alt="Ảnh khuyến mãi" />
                </Link>
              </div>
              <div className=" col-span-1 shadow-lg">
                <Link to="">
                  <img src={sale2} alt="Ảnh khuyến mãi1" />
                </Link>
              </div>
              <div className=" col-span-1 shadow-lg">
                <Link to="">
                  <img src={sale3} alt="Ảnh khuyến mãi2" />
                </Link>
              </div>
              <div className=" col-span-1 shadow-lg">
                <Link to="">
                  <img src={sale4} alt="Ảnh khuyến mãi3" />
                </Link>
              </div>
            </div>
            <div className=" grid mt-4 shadow-lg rounded bg-white grid-cols-8 gap-4">
              <div className=" col-span-8">
                <div className=" ml-4 py-4 flex items-center justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-6 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"
                    />
                  </svg>
                  <p className=" ml-2 uppercase font-bold text-black ">
                    Danh mục sản phẩm
                  </p>
                </div>
                <div className=" border border-solid border-gray-100 mb-2"></div>
              </div>
              {List.map((item, index) => (
                <div key={index} className=" col-span-1  py-2">
                  <Link
                    className=" flex flex-col text-gray-500 hover:text-red-700 items-center justify-between"
                    to={item.link}
                  >
                    <img src={item.image} alt={item.title} />
                    <p className="text-sm  text-center font-semibold  mt-3">
                      {item.title}
                    </p>
                  </Link>
                </div>
              ))}
            </div>
            <div className=" mt-2 grid grid-cols-5 gap-2">
              <div className=" col-span-5 bg-white shadow-lg rounded">
                <div className=" ml-4 py-4 flex items-center justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2.5}
                    stroke="currentColor"
                    className="size-6 text-red-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
                    />
                  </svg>

                  <p className=" ml-2 uppercase font-bold text-black ">
                    Danh Sách sản phẩm
                  </p>
                </div>
                <div className=" border border-solid border-gray-100 mb-2"></div>
              </div>
              {books.slice(0,15).map((item, index) => (
                <div
                  onClick={() => handleDetail(item)}
                  key={item.id}
                  className=" col-span-1 cursor-pointer bg-white shadow-lg rounded transform transition-transform duration-300 hover:translate-y-1"
                >
                  <div className="">
                    <img
                      src={`/image/${item.image}`}
                      alt="Sản phẩm"
                      className=" h-[160px] ml-4"
                    />
                  </div>
                  <div className="mt-4 text-xs cursor-pointer hover:text-gray-600  font-normal text-gray-700">
                    <p className=" h-[40px] leading-[20px] mx-2  text-left line-clamp-2">
                      {item.title}
                    </p>
                    <div className="flex mt-3 items-center justify-start">
                      <p className=" text-gray-600  font-medium text-xs mx-2 line-through">
                        {" "}
                        {Number(item.priceold).toLocaleString("vi-VN")} đ
                      </p>
                      <p className=" bg-red-500 ml-2 text-sm text-white font-semibold shadow-lg rounded  px-2 py-1">
                        {" "}
                        - {item.sale}
                      </p>
                    </div>
                    <div className=" flex pb-3 mt-2 items-center justify-between mx-2">
                      <p className=" text-red-500 text-sm font-semibold ">
                        {Number(item.price).toLocaleString("vi-VN")} đ
                      </p>
                      <p className="text-gray-600 font-normal text-xs ">
                        {" "}
                        còn hàng : {item.sold}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-span-5 rounded ">
                <div className=" flex items-center justify-center ">
                  <a href="/tat-ca-san-pham" className=" text-white  shadow-lg font-bold text-lg uppercase hover:bg-red-600 bg-red-700 px-8 py-2 rounded my-2">
                    Xem Thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
