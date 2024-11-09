import React from "react";

const modalgh = ({ onclose }) => {
  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[600px] py-3 bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center   font-bold text-xl text-black">
              Thời gian giao hàng
            </h2>
            <div onClick={onclose} className=" cursor-pointer relative ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                stroke="currentColor"
                className="size-6 hover:text-red-700 text-red-600 absolute top-[-12px] right-[-200px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <div className=" w-[600px] mt-[60px] h-[400px]">
            <div className=" mx-3 mt-4 py-3 px-3">
              <p className=" font-semibold text-sm">
                THÔNG TIN ĐÓNG GÓI, VẬN CHUYỂN HÀNG
              </p>
              <p className=" text-justify">
                Với đa phần đơn hàng, BookHuH cần vài giờ làm việc để kiểm tra
                thông tin và đóng gói hàng. Nếu các sản phẩm đều có sẵn hàng,
                Bookhuh sẽ nhanh chóng bàn giao cho đối tác vận chuyển. Nếu
                đơn hàng có sản phẩm sắp phát hành, Bookhuh sẽ ưu tiên giao
                những sản phẩm có hàng trước cho Quý khách hàng.
                <br />
                Trong một số trường hợp, hàng nằm không có sẵn tại kho gần nhất,
                thời gian giao hàng có thể chậm hơn so với dự kiến do điều hàng.
                Các phí vận chuyển phát sinh, Bookhuh sẽ hỗ trợ hoàn toàn.
                <br />
                Thời gian giao hàng không tính thứ 7, Chủ nhật, các ngày Lễ, Tết
                và không bao gồm tuyến huyện đảo xa.
              </p>
              <p className=" mt-2 font-semibold text-sm">
                THỜI GIAN VÀ CHI PHÍ GIAO HÀNG TẠI TỪNG KHU VỰC TRONG LÃNH THỔ
                VIỆT NAM:
              </p>
              <p className=" font-medium"> 1. Nội thành TP.HCM và Hà Nội</p>
              <p> Thời gian: 1-2 ngày</p>
              <p className=" font-medium"> 2. Các tỉnh thành khác</p>
              <p> Thời gian: 2-3 ngày</p>
              <p>
                {" "}
                Chi phí: 30.000 đồng cho toàn bộ đơn hàng trên toàn quốc .
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default modalgh;
