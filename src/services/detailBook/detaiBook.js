import http from "../http";

export const apigetDetailBook = (id) => {
    return http.get(`/detailbook.php?id=${id}`);
}
