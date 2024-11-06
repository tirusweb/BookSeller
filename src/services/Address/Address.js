import http from "../http";

export const apiPostCustomer = (data) => {
    return http.post('/address.php', data)
}

 export const apiGetCustomer = (username) => {
    return http.get(`/address.php?username=${username}`);
}

 export const apiUpdateCustomer = ( idcus, username, data) => {
    return http.put('/updatecus.php', {idcus ,username ,  ...data});
}