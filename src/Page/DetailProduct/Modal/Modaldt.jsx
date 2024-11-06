import React from "react";

const Modaldt = ({ onclose }) => {
  return (
    <>
      <div className="fixed z-40 inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white overflow-y-auto rounded shadow-lg">
          <div className=" w-[600px] py-3 bg-white fixed flex items-center justify-center ">
            <h2 className=" text-center   font-bold text-xl text-black">
              Chính sách đổi trả
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
                CHÍNH SÁCH ĐỔI / TRẢ / HOÀN TIỀN
              </p>
              <p className=" text-justify">
                Chúng tôi luôn trân trọng sự tin tưởng và ủng hộ của quý khách
                hàng khi trải nghiệm mua hàng tại BookHuH. Do đó chúng tôi luôn
                cố gắng hoàn thiện dịch vụ tốt nhất để phục vụ mọi nhu cầu mua
                sắm của quý khách.
                <br />
                BookHuH chúng tôi luôn luôn cam kết tất cả các sản phẩm bán tại
                BookHuH 100% là những sản phẩm chất lượng và xuất xứ nguồn gốc
                rõ ràng, hợp pháp cũng như an toàn cho người tiêu dùng. Để việc
                mua sắm của quý khách tại BookHuH là trải nghiệm dịch vụ thân
                thiện, chúng tôi hy vọng quý khách sẽ kiểm tra kỹ các nội dung
                sau trước khi nhận hàng:
              </p>
              <p className=" mt-2 text-justify">
                {" "}
                Thông tin sản phẩm: tên sản phẩm và chất lượng sản phẩm.
              </p>
              <p className=" mt-2 text-justify"> Số lượng sản phẩm.</p>
              <p className=" mt-2 text-justify">
                {" "}
                Thông tin sản phẩm, người nhận (Đối chiếu với thông tin trên
                phiếu giao hàng được bỏ trong hộp) trong lúc nhận hàng trước khi
                ký nhận và thanh toán tiền cho nhân viên giao nhận.
              </p>
              <p className=" mt-2 text-justify">
                <p className=" mt-2 text-justify">
                  {" "}
                  Thông tin sản phẩm, người nhận (Đối chiếu với thông tin trên
                  phiếu giao hàng được bỏ trong hộp) trong lúc nhận hàng trước
                  khi ký nhận và thanh toán tiền cho nhân viên giao nhận.
                </p>
                <p className=" mt-2 text-justify">
                  {" "}
                  Khi quý khách hàng có hàng hóa mua tại Fahasa.comcần đổi/
                  trả/bảo hành/hoàn tiền, xin quý khách hàng liên hệ với chúng
                  tôi qua hotline 1900636467 để tìm hiểu thêm về chính sách
                  đổi/trả.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modaldt;
