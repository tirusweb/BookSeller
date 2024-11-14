import React, { useEffect, useState } from "react";
import { apiPostContact } from "../../services/Contact/Contact";
import infor from "../../../src/image/inforsu.png";
import infor1 from "../../../src/image/inforfa.png";
import { toast, ToastContainer } from "react-toastify";
import ShowResponse from "./Respon";
const Contact = () => {
  const [title, setTitle] = useState("");
  const [descript, setDescript] = useState("");
  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );
  const [error, setError] = useState(null);
  const [isPopup, setShowPopup] = useState(false);


  useEffect(() => {
    // Cuộn lên đầu trang
    window.scrollTo(0, 0);
  }, []);

  const handleAddContact = async () => {
    const data = {
      title,
      descript,
      username,
    };
    try {
      const response = await apiPostContact(data);
      if (response.data.status === 1) {
        toast.success("Bạn đã gửi liên hệ thành công");
      } else {
        toast.error(" gửi liên hệ thất bại");
      }
    } catch (error) {
      setError(" Lỗi khi gửi liên hệ ");
    }
  };

  const handleShow = () => {
    setShowPopup(!isPopup);
  }
  const handleClose = () => {
    setShowPopup(false);
  }

  return (
    <>
      <div>
        <ToastContainer position="top-right" />
        <div className=" w-screen">
          <div className=" mx-14 my-8">
            <div className=" grid grid-cols-10 gap-2">
              <div className=" col-span-10 bg-white rounded shadow-lg">
                <div className=" flex items-center justify-between">
                  <div className=" flex items-center py-3 justify-start mx-12">
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
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
                      />
                    </svg>
                    <h2 className=" text-xl uppercase font-bold text-red-600 ml-4">
                      {" "}
                      Liên hệ Góp ý
                    </h2>
                  </div>
                  <div onClick={handleShow} title="Hòm thư phản hồi " className=" flex items-center justify-start cursor-pointer mr-20">
                    <p className=" text-sm font-medium mr-2 ">Nhắn tin</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2.5}
                      stroke="currentColor"
                      className="size-8 text-red-600 hover:text-red-700"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className=" col-span-10 bg-white rounded shadow-lg">
              <div className=" mt-4 w-full flex items-center justify-start">
                <p className=" ml-12 w-1/6 text-sm font-medium text-gray-500 ">
                  {" "}
                  Nhập tiêu đề{" "}
                </p>
                <input
                  required
                  value={title}
                  placeholder="Nhập tiêu đề..."
                  onChange={(e) => setTitle(e.target.value)}
                  className=" w-4/6 py-2 mt-3 px-6 my-3 border border-solid rounded border-gray-300 outline-cyan-200 "
                />
              </div>
              <div className=" mt-4 w-full flex items-center justify-start">
                <p className=" ml-12 w-1/6 text-sm font-medium text-gray-500 ">
                  {" "}
                  Nhập nội dung{" "}
                </p>
                <textarea
                  required
                  value={descript}
                  placeholder="Nhập nội dung ...."
                  onChange={(e) => setDescript(e.target.value)}
                  className=" text-sm max-h-72 w-4/6 py-2 mt-3 px-6 my-3 border border-solid rounded border-gray-300 outline-cyan-200 "
                />
              </div>

              <div className=" flex items-center justify-center">
                <button
                  onClick={handleAddContact}
                  className=" text-sm font-bold bg-red-600 px-12 py-3 hover:bg-red-500 mb-4 text-white border-none rounded-md shadow-lg"
                >
                  Gửi liên hệ
                </button>
              </div>
            </div>
          </div>
        </div>
        {isPopup && <ShowResponse onclose = {handleClose}/>}
      </div>
    </>
  );
};

export default Contact;
