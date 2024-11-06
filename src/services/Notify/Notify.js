import http from "../http";


export const apiGetNotify = () => {
    return http.get('/notify.php');
}