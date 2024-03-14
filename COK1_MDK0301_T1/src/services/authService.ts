const authService = { 
    login: (email: string, password: string) => {
        return email === "demo@mail.ru" && password === "demo" ? true : false;
    }
};

export default authService;