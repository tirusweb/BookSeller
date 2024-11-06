import http from "../http";

export const apiGetVoucher = (username) => {
    return http.get(`/voucher.php?username=${username}`);
}