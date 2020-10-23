const jwt = require('jsonwebtoken');
const { registerUser, authUser } = require("../services/auth");
const key = process.env.SECRET_WORD;

module.exports = {
    register: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const newUser = await registerUser(email, password);
            res.status(200);
        } catch (err) {
            if (/duplicate key error/.test(err.message)) {
                next({
                    statusCode: 400,
                    message: 'duplicate error',
                    data: Object.keys(err.keyValue)
                });
            } else {
                next(err);
            }
        }
    },
    auth: async (req, res, next) => {
        const { email, password } = req.body;
        try {
            const newUser = await authUser(email, password);
            if (newUser) {
                const token = jwt.sign(newUser._id.toString(), key);
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'invalid Credentials' });
            }

        } catch (err) {
            next({
                statusCode: 401,
                message: 'invalid Credentails',
            });
        }
    },

}