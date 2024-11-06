import React, { useEffect, useState } from "react";
import { apiGetTypeBook } from "../../services/Type/Type";
import { useNavigate } from "react-router-dom";

const Vanhoc = () => {

    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    useEffect(() => {
      // Cuộn lên đầu trang
      window.scrollTo(0, 0);
    }, []);
    const type = "Văn học"

    useEffect(() => {
        const fetchBooks = async () => {
          try {
            const response = await apiGetTypeBook(type);
            console.log(response.data);
            if (response.data.status === 1) {
              setBooks(response.data.books); // Sửa lại thành 'books'
            } else {
              setError(response.data.msg);
            }
          } catch (error) {
            setError("Không thể tải chi tiết sách. Vui lòng thử lại.");
            console.error("Lỗi khi gọi API:", error.message);
          }
        };
    
        fetchBooks();
      }, [type]);
    
      const handleDetail = (item) => {
        navigate(`/chi-tiet-san-pham/${item.id}`);
      };
  return (
    <>
      <div className="">
        <div className=" w-screen">
          <div className=" mx-14 my-8">
            <div>
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
                      Danh mục Văn học
                    </p>
                  </div>
                  <div className=" border border-solid border-gray-100 mb-2"></div>
                </div>
                {books.map((item, index) => (
                  <div
                    onClick={() => handleDetail(item)}
                    key={item.id}
                    className=" col-span-1 cursor-pointer bg-white shadow-lg rounded transform transition-transform duration-300 hover:translate-y-1"
                  >
                    <div className="">
                      <img
                        src={`/image/${item.image}`}
                        alt="Sản phẩm"
                        className=" h-[160px] "
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
                          đã bán : {item.sold}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vanhoc;
