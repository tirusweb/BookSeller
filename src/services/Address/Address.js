import http from "../http";


export const apiPostCustomer = (data) => {
    return http.post('/API/address.php', data)
}

 export const apiGetCustomer = (username) => {
    return http.get(`/API/address.php?username=${username}`);
}

 export const apiUpdateCustomer = ( idcus, username, data) => {
    return http.put('/API/updatecus.php', {idcus ,username ,  ...data});
}