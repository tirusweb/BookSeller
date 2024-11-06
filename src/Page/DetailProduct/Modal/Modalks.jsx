import React from "react";

const Modalks = ({ onclose }) => {
  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[600px] py-3 bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center   font-bold text-xl text-black">
              Chính sách khách sỉ
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
              <p className="font-semibold text-sm">
                Hiện nay, do mức chiết khấu trên BookHuH rất cao, đặc biệt
                vào các thời điểm chạy chương trình. Do đó đối với mỗi chương
                trình số lượng sản phẩm giảm sốc có giới hạn nhất định, vì vậy
                để đảm bảo quyền lợi của từng khách hàng, chúng tôi xin thông
                báo chính sách "Đơn Hàng Sỉ" như sau:
              </p>
              <p className=" text-justify mt-4">
                Chính sách giá (% chiết khấu giảm giá). Đây là chính sách chung
                chỉ mang tính tương đối. Đối với khách hàng có nhu cầu đặt sỉ,
                xin Quý khách vui lòng liên lạc với BookHuH để có chính sách giá
                chính xác nhất:
              </p>
              <p className=" mt-2 text-justify">
                {" "}
                - Đối với Nhóm hàng sách <b> Kinh tế, Văn học </b>: áp dụng mức giảm giá
                trên web tối đa không vượt quá 30%.
              </p>
              <p className=" mt-2 text-justify">
                {" "}
                - Đối với Nhóm hàng sách <b> Thiếu nhi, Tâm lý kỹ năng </b>: áp dụng mức giảm giá
                trên web tối đa không vượt quá 20%.
              </p>
              <p className=" mt-2 text-justify">
                {" "}
                - Đối với Nhóm hàng sách <b>Văn phòng phẩm, Đồ chơi, Dụng cụ học sinh </b>: áp dụng mức giảm giá
                trên web tối đa không vượt quá 15%.
              </p>
              <p className=" mt-2 text-justify">
                {" "}
                - Đối với Nhóm hàng sách <b>Từ điển, Ngoại văn </b>: áp dụng mức giảm giá
                trên web tối đa không vượt quá 10%.
              </p>
              <p className=" mt-2 text-justify">
                {" "}
                - Đối với Nhóm hàng sách <b>Giấy photo, Sản phẩm điện tử, Văn hóa phẩm </b>: áp dụng mức giảm giá
                trên web tối đa không vượt quá 5%.
              </p>
              <p className=" mt-2 text-justify">
                {" "}
                Vui lòng liên hệ phòng kinh doanh BookHuH:<b> 0886888666</b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modalks;
