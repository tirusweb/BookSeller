import http from "../http";

export const getListBooks = () => {
  return http.get('/lists.php');
};
