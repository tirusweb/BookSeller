import React from "react";

const LoginNew = () => {
  return (
    <>
      <div className='bg-[url("https://i.imgur.com/fk9Sdzs.jpeg")] bg-cover bg-center w-screen h-screen'>
        <div className=" w-full grid grid-cols-6 gap-2 grid-rows-5">
          <div className="  col-span-2 col-start-2 mt-16 row-start-1">
            <h2 className=" text-red-600 uppercase font-bold text-xl"> Đăng nhập tài khoản</h2>
         
            <input className=" mt-2 py-2  px-4 rounded border border-solid border-red-300 outline-red-600"  placeholder=" Nhập tên tài khoản"/>
            <input className=" mt-2 py-2  px-4 rounded border border-solid border-red-300 outline-red-600"  placeholder=" Nhập tên tài khoản"/>
            <input className=" mt-2 py-2  px-4 rounded border border-solid border-red-300 outline-red-600"  placeholder=" Nhập tên tài khoản"/>
            <input className=" mt-2 py-2  px-4 rounded border border-solid border-red-300 outline-red-600"  placeholder=" Nhập tên tài khoản"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginNew;
