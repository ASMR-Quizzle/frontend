import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../types";

export const login = (res) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, res.data.access.toString());
    localStorage.setItem(REFRESH_TOKEN_KEY, res.data.refresh.toString());
}

export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
}

export const isLogin = () => {
    return !!(localStorage.getItem(ACCESS_TOKEN_KEY));
}