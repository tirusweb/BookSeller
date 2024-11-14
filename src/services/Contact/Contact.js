import http from "../http";


export const apiPostContact = (data) => {
    return http.post('/contact.php', data);
} 

export const apiGetContact = (username) => {
    return http.get(`/contact.php?username=${username}`);
} 

export const apiSeenContact = (data) => {
    return http.post('/contactseen.php', data);
} 