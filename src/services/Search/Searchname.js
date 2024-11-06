import http from "../http";


export const apiGetName = (title) => {
    return http.get(`/searchname.php?title=${encodeURIComponent(title)}`);
}
