const ACCESS_TOKEN_KEY = 'token';

export const login = (res) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, res.data.access);
}

export const logout = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export const isLogin = () => {
    if (localStorage.getItem(ACCESS_TOKEN_KEY)) {
        return true;
    }

    return false;
}