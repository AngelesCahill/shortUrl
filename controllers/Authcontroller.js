const loginForm = (req, res) => {
    res.render("login");
};

const registerForm = (req, res) => {
    res.render("register");
};



export const AuthController = {
    registerForm,
    loginForm
};