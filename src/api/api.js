import * as axios from "axios";

const instance = axios.create ({
    withCredentials: true,
    headers: {
        'API-KEY' : 'bb14091f-e225-4b4a-b896-f05b538f53fb'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const authApi = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
};

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) { //default parametres
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    getUserProfile (userID) {
        console.warn('Obsolete method. Please, use profileAPI object.');
        return profileAPI.getUserProfile(userID);
    },
    unfollowButtonAPI (userIdforthisFunc) {
        return instance.delete(`follow/${userIdforthisFunc}`)
    },
    followButtonAPI (userIdforthisFunc) {
        return instance.post(`follow/${userIdforthisFunc}`)
    }
};


export const profileAPI = {

    getUserProfile (userID) {
        return instance.get('profile/' + userID)
    },
    getStatus(userID) {
        return instance.get('profile/status/'+ userID)
    },
    updateStatus(status) {
        return instance.put ('profile/status', { status: status})
    }
};
