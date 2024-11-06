import http from "../http";


// thêm cản phẩm và giỏ hàng
export const apiPostCart = async (data) => {
  try {
    const response = await http.post('/cartbook.php', data); 
    return response.data; 
  } catch (error) {
    console.error("Error while adding product to cart:", error);
    throw error; 
  }
};

// lấy ra danh sách trong giỏ hàng
export const apigetCartlBook = (username) => {
    return http.get(`/cartbook.php?username=${username}`);
}

// xóa sản phầm trong giỏ hàng

export const apiDeleteCartBook = (id) => {
    return http.delete(`/cartbook.php?id=${id}`); // Thêm username vào URL
};


