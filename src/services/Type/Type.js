import http from "../http";



export const apiGetTypeBook = (type) => {
    return http.get(`/category.php?type=${type}`);
}