import React, { useEffect, useState } from "react";
import {
  apigetCartlBook,
  apiDeleteCartBook,
} from "../../services/Cartbook/Cartbook";
import { useNavigate } from "react-router-dom";
import infor1 from "../../../src/image/inforfa.png";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const CartBook = () => {
  const [Cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);
  const [isFalse, setShowFalse] = useState(false);

  const [username, setUsername] = useState(
    localStorage.getItem("user") || "Tài khoản"
  );
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    try {
      const response = await apigetCartlBook(username);
      if (response.data.status === 1) {
        const booksWithQuantity = response.data.books.map((book) => ({
          ...book,
          quantity: 1, // Đặt số lượng mặc định là 1
        }));
        setCart(booksWithQuantity);
      } else {
        setError(response.data.msg);
      }
    } catch (error) {
      setError("Không thể tải chi tiết sách. Vui lòng thử lại.");
    }
  };
  useEffect(() => {
    fetchBooks();
  }, [username]);

  const handlePay = () => {
    const selectedBooks = Cart.filter((item) =>
      selectedItems.includes(item.id)
    );
    const totalAmount = calculateTotalSelectedItems();

    if (totalAmount === 0) {
      toast.error("Vui lòng chọn sản phẩm !");
      return;
    }
    // Debugging logs
    console.log("Selected Books:", selectedBooks);
    console.log("Total Amount (including VAT):", totalAmount);

    navigate("/thanh-toan", {
      state: {
        selectedBooks,
        totalAmount,
      },
    });
  };

  const handleDelete = async (id) => {
    try {
      const response = await apiDeleteCartBook(id);
      await fetchBooks();
      if (response.status === 1) {
        console.log("Xóa thành công!");
      } else {
        console.error("Xóa không thành công:", response.msg);
      }
    } catch (error) {
      console.error("Lỗi khi xóa sách:", error);
    }
  };

  // Hàm xử lý khi thay đổi số lượng
  const handleQuantityChange = (index, delta) => {
    setCart((prevCart) => {
      const newCart = [...prevCart];
      newCart[index].quantity = Math.max(newCart[index].quantity + delta, 1); // Không cho số lượng < 1
      return newCart;
    });
  };

  // Hàm tính tổng thành tiền của một sản phẩm
  const calculateTotal = (price, quantity) => {
    return price * quantity;
  };

  // Hàm xử lý chọn tất cả
  const handleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    if (newSelectAll) {
      setSelectedItems(Cart.map((item) => item.id));
    } else {
      setSelectedItems([]);
    }
  };

  // Hàm xử lý chọn từng sản phẩm
  const handleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  // Hàm tính tổng tiền của các sản phẩm đã chọn
  const calculateTotalSelectedItems = () => {
    return Cart.reduce((total, item) => {
      if (selectedItems.includes(item.id)) {
        return total + calculateTotal(item.price, item.quantity);
      }
      return total;
    }, 0);
  };
  const openDeletePopup = (id) => {
    setBookToDelete(id);
    setDeletePopupOpen(true);
  };
  const confirmDelete = async () => {
    if (bookToDelete) {
      await handleDelete(bookToDelete);
      setDeletePopupOpen(false);
      setBookToDelete(null);
    }
  };
  const cancelDelete = () => {
    setDeletePopupOpen(false);
    setBookToDelete(null);
  };

  return (
    <div className="">
      <ToastContainer position="top-right" autoClose={1000} />
      <div className="w-screen">
        <div className="mx-14 my-8">
          <div className="grid grid-cols-10 gap-2">
            <div className="col-span-7 bg-white rounded shadow-lg p-4">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th
                      className="text-left text-gray-500 text-sm font-medium cursor-pointer"
                      colSpan={2}
                    >
                      <input
                        id="allcheck"
                        name="allcheck"
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="mr-2"
                      />
                      <label htmlFor="allcheck">
                        Chọn tất cả ({Cart.length} sản phẩm)
                      </label>
                    </th>
                    <th
                      className="text-left px-3 mx-3 text-gray-500 text-sm font-medium"
                      colSpan={2}
                    >
                      Số lượng
                    </th>
                    <th
                      className="text-left mx-3 text-gray-500 text-sm font-medium"
                      colSpan={2}
                    >
                      Thành tiền
                    </th>
                    <th
                      className="text-left text-gray-500 text-sm font-medium"
                      colSpan={1}
                    ></th>
                  </tr>
                </thead>
                <tbody className="py-4">
                  {Cart.map((item, index) => (
                    <tr key={item.id} className="border-b py-4">
                      <td colSpan={2}>
                        <div className="flex items-center space-x-4">
                          <input
                            type="checkbox"
                            name="productCheck"
                            checked={selectedItems.includes(item.id)}
                            onChange={() => handleSelectItem(item.id)}
                            className="mr-2"
                          />
                          <img
                            src={`/image/${item.image_cart}`}
                            alt="Sách"
                            className="h-24 w-auto"
                          />
                          <div className="flex-col">
                            <p className="text-xs font-normal">{item.title}</p>
                            <div className="flex items-center space-x-2">
                              <span className="text-black-500 text-sm font-medium">
                                {Number(item.price).toLocaleString("vi-VN")} đ
                              </span>
                              <span className="text-gray-400 text-xs line-through">
                                {Number(item.priceold).toLocaleString("vi-VN")}{" "}
                                đ
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td
                        className=" px-3 mx-4  text-gray-500 font-medium"
                        colSpan={2}
                      >
                        <div className="flex items-center border rounded-md  ">
                          <button
                            onClick={() => handleQuantityChange(index, -1)}
                            className="px-2 py-1 text-xl rounded"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            value={item.quantity}
                            readOnly
                            className="w-8 text-center mx-2"
                          />
                          <button
                            onClick={() => handleQuantityChange(index, 1)}
                            className="px-2 py-1 text-xl  rounded"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td colSpan={2}>
                        <p className="text-red-500 font-semibold text-sm">
                          {calculateTotal(
                            item.price,
                            item.quantity
                          ).toLocaleString("vi-VN")}{" "}
                          đ
                        </p>
                      </td>
                      <td colSpan={1}>
                        <button
                          onClick={() => openDeletePopup(item.id)}
                          className="text-gray-500 hover:text-red-500"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="col-span-3 px-4 py-6 bg-white rounded shadow-lg">
              <div className=" flex items-center border-b border-solid border-gray-200 pb-4 justify-between">
                <p className=" font-normal text-sm text-black">Tổng tiền:</p>
                <p>{calculateTotalSelectedItems().toLocaleString("vi-VN")} đ</p>
              </div>
              <div className=" flex items-center py-4 justify-between">
                <p className=" font-semibold text-sm text-black">
                  Tổng Số Tiền (gồm VAT):
                </p>
                <p className="text-xl font-bold text-red-600">
                  {calculateTotalSelectedItems().toLocaleString("vi-VN")} đ
                </p>
              </div>
              <button
                onClick={handlePay}
                className="w-full mt-4 py-2 px-4 bg-red-500 font-bold text-white rounded hover:bg-red-600"
              >
                Thanh Toán
              </button>
            </div>
          </div>
        </div>
      </div>
      {isDeletePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Bạn có chắc chắn muốn xóa sách này không?</p>
            <div className="flex justify-end mt-4">
              <button
                onClick={cancelDelete}
                className="bg-gray-300 px-4 py-2 rounded mr-2"
              >
                Hủy
              </button>
              <button
                onClick={confirmDelete}
                className="bg-red-500 text-white px-4 py-2 rounded"
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

export default CartBook;
