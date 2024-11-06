import http from "../http";


export const apiPostContact = (data) => {
    return http.post('/contact.php', data);
} 