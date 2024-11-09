import React, { useEffect, useState } from "react";
import { apiGetNotify, apiGetNotifyByUser } from "../../services/Notify/Notify";

const Notify = () => {
  const [notify, setNotify] = useState([]);
  const [error, setError] = useState(null);
  const [isShow, setIsShow] = useState(null);
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );

  useEffect(() => {
    const getNotify = async () => {
      try {
        const [responseForTrungHieu, responseForCurrentUser] = await Promise.all([
          apiGetNotifyByUser("admin"),
          apiGetNotifyByUser(username)
        ]);

        let combinedNotifications = [];
        let errors = [];

        // Kiểm tra phản hồi cho "trung hiếu"
        if (responseForTrungHieu.data.status === 1) {
          combinedNotifications = [...combinedNotifications, ...responseForTrungHieu.data.notifications];
        } else {
          errors.push(responseForTrungHieu.data.msg);
        }

        // Kiểm tra phản hồi cho người dùng hiện tại
        if (responseForCurrentUser.data.status === 1) {
          combinedNotifications = [...combinedNotifications, ...responseForCurrentUser.data.notifications];
        } else {
          errors.push(responseForCurrentUser.data.msg);
        }

        // Cập nhật notify với dữ liệu kết hợp
        setNotify(combinedNotifications);

        // Cập nhật tất cả lỗi nếu có
        if (errors.length > 0) {
          setError(errors.join(' | '));
        }

      } catch (error) {
        setError("Lỗi khi gọi API!");
      }
    };

    getNotify();
  }, [username]);
  

  const handleShow = (id) => {
    if (isShow === id) {
      setIsShow(null);
    }else{
        setIsShow(id);
    }
  };

  return (
    <>
      <div className="">
        <div className=" w-screen">
          <div className=" bg-white shadow-lg rounded mx-14 my-8">
            <div className=" grid grid-cols-4 gap-2">
              <div className=" mx-6 my-4 col-span-4">
                <h2 className=" font-bold text-red-600 text-2xl ">
                  {" "}
                  Thông Báo
                </h2>
                <div className=" border mt-2 border-gray-200 border-solid"></div>
              </div>
              {notify.map((noti) => (
                <div key={noti.id} className=" my-4 mx-6 col-span-4 ">
                  <div className=" flex items-center justify-between">
                    <div className="  flex items-center justify-start">
                      <h3 className=" font-medium text-sm text-black">
                        {noti.title}{" "}
                      </h3>
                      <p className=" text-xs font-normal ml-2 text-gray-500">
                        {" "}
                        {new Date(noti.daynow).toLocaleDateString()}
                      </p>
                    </div>
                    <p
                      onClick={() => handleShow(noti.id)}
                      className=" hover:text-red-700 cursor-pointer text-red-600 font-medium text-sm"
                    >
                      {" "}
                      Xem chi tiết
                    </p>
                  </div>
                  <p className={`text-sm font-medium text-gray-500  ${isShow === noti.id ? "block" : " hidden" }`}>
                    {noti.descript}
                  </p>
                <div className=" border mt-2 border-gray-100 border-solid"></div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notify;
