import http from "../http";

export const apiGetMyOder = (idcus) => {
    return http.get(`/myoder.php?idcus=${idcus}`); // Gọi API với idcus
};


export const apiUpdateBill = (idbill, status) => {
    return http.post(`/myoder.php`, { idbill, status });
};
