import axios from "axios";



const http = axios.create({
    baseURL:  `http://localhost/API/`, 
    // baseURL:  `http://trunghieu.name.vn/API`, 
    timeout: 10000, 
});

http.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;
