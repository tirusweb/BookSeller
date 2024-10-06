import http from "../http";

export const apiLoginUser = (username, password) => {
    return http.get('/user/login', {
        params: {
            username: username,
            password: password,
        },
    });
};



export const apiPostUser = async (data) => {
    try {
        const response = await http.post('/user/save', data);
        return response.data;
    } catch (error) {
        console.error("Error while registering user:", error);
        throw error; 
    }
};