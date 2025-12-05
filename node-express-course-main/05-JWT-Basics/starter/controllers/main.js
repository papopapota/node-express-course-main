const CustomAPIError = require("../errors/custom-error");

const login = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        throw new CustomAPIError('Please provide email and password', 400);
    }
    //mongoose validation will also work
    //joi
    //yup
    res.send('Login Successful');
};

const dashboard = async (req, res) => {
    const luckuNumber = Math.floor(Math.random() * 100);
    res.status(200).json({
        msg: `Hello, Jhon Doe`,
        secret: `Heres is your authorized data, your lucky numbers is ${luckuNumber}`
    })  
}

module.exports = {
    login,
    dashboard
};