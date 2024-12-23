import http from "../http";


export const apiPostBill = async (data) => {
  try {
    const response = await http.post('/pay.php', data); 
    return response.data; 
  } catch (error) {
    console.error("Error while adding product to cart:", error);
    throw error; 
  }
};

export const apiGetBillByStatus = (idcus, status) => {
  return http.get(`/billstatus.php?idcus=${idcus}&status=${status}`);
};