import http from "../http";

export const apiLoginUser = (username, password) => {
    return http.get('/users.php', {
        params: {
            username: username,
            password: password,
        },
    });
};
export const apiPostUser = async (data) => {
    try {
        const response = await http.post('/users.php', data);
        return response.data;
    } catch (error) {
        console.error("Error while registering user:", error);
        throw error; 
    }
};


export const apiGetUser = (username) => {
    return http.get(`/updateuser.php?username=${username}`);
};



  export const apiUpdateUser = (username, data) => {
    return http.post(`/updateuser.php`, { username, ...data });
  };
    

 // Định nghĩa hàm gọi API để thay đổi mật khẩu
 export const apiChangPass = (data) => {
    return http.post("/changpass.php", data);
};
  
export const apiForgotPass = (data) => {
    return http.post("/forgotpass.php", data);
};