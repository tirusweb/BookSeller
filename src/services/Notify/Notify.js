import http from "../http";


export const apiGetNotify = () => {
    return http.get('/notify.php');
}

export const apiGetNotifyByUser = (username) => {
    return http.get(`/notifyusername.php?username=${username}`);
};