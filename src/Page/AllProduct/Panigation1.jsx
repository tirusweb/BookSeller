// import React, { useEffect, useState } from "react";
// import { getListBooks } from "../../services/Listbook/Listbook";
// import { Link, useNavigate } from "react-router-dom";

// const Panigation1 = () => {
//     const [books, setBooks] = useState([]);
//   const [error, setError] = useState(null);

//   const navigate = useNavigate();  

//     useEffect(() => {
//         const fetchBooks = async () => {
//           try {
//             const response = await getListBooks();
//             console.log(response); // Kiểm tra phản hồi từ API
    
//             if (response.data.status === 1) {
//               setBooks(response.data.books);
//               console.log("Data: ", response.data.books);
//             } else {
//               setError(response.data.msg);
//             }
//           } catch (error) {
//             setError("Không thể tải danh sách sách. Vui lòng thử lại.");
//             console.error("Lỗi khi gọi API:", error.message);
//           }
//         };
    
//         fetchBooks();
//       }, []);

//       const handleDetail = (item) => {
//         navigate(`/chi-tiet-san-pham/${item.id}`);
//       };

//   return (
//     <>
//       <div className="">
//         <div className=" w-screen">
//           <div className=" mx-14 my-8">
//             <div>
//             <div className=" mt-2 grid grid-cols-8 gap-2">
//               <div className=" col-span-8 bg-white shadow-lg rounded">
//                 <div className=" ml-4 py-4 flex items-center justify-start">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={2.5}
//                     stroke="currentColor"
//                     className="size-6 text-red-700"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z"
//                     />
//                   </svg>

//                   <p className=" ml-2 uppercase font-bold text-black ">
//                     tất cả sản phẩm
//                   </p>
//                 </div>
//                 <div className=" border border-solid border-gray-100 mb-2"></div>
//               </div>
//               {books.slice(9,17).map((item, index) => (
//                 <div
//                   onClick={() => handleDetail(item)}
//                   key={item.id}
//                   className=" col-span-2 cursor-pointer bg-white shadow-lg rounded transform transition-transform duration-300 hover:translate-y-1"
//                 >
//                   <div className="">
//                     <img
//                       src={`/image/${item.image}`}
//                       alt="Sản phẩm"
//                       className=" h-[160px] ml-4 "
//                     />
//                   </div>
//                   <div className="mt-4 text-xs cursor-pointer hover:text-gray-600  font-normal text-gray-700">
//                     <p className=" h-[40px] leading-[20px] mx-2  text-left line-clamp-2">
//                       {item.title}
//                     </p>
//                     <div className="flex mt-3 items-center justify-start">
//                       <p className=" text-gray-600  font-medium text-xs mx-2 line-through">
//                         {" "}
//                         {Number(item.priceold).toLocaleString("vi-VN")} đ
//                       </p>
//                       <p className=" bg-red-500 ml-2 text-sm text-white font-semibold shadow-lg rounded  px-2 py-1">
//                         {" "}
//                         - {item.sale}
//                       </p>
//                     </div>
//                     <div className=" flex pb-3 mt-2 items-center justify-between mx-2">
//                       <p className=" text-red-500 text-sm font-semibold ">
//                         {Number(item.price).toLocaleString("vi-VN")} đ
//                       </p>
//                       <p className="text-gray-600 font-normal text-xs ">
//                         {" "}
//                         con hàng : {item.sold}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <div className=" col-span-5 flex items-center justify-center ">
//               <Link to={"/tat-ca-san-pham"} className="bg-red-400 px-3 py-1  ">1</Link>
//                 <Link  to={"/phan-trang1"} className="bg-red-400 px-3 py-1  ml-4">2</Link>
//               </div>
//             </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Panigation1;
