const getStorageAuth = () => { 
    return { 
        login: localStorage.getItem('auth-login'),
        password: localStorage.getItem('auth-password')
    };
};

export default getStorageAuth;