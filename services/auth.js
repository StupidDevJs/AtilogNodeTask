const bCrypt = require('bcrypt');
const User = require('../models/authSchema');

const registerUser = async (email, password) => {
    const salt = await bCrypt.genSalt();
    const hashedPass = bCrypt.hashSync(password, salt)
    console.log(hashedPass);
    return new User({
        email,
        password: hashedPass,
    }).save()
};
const authUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        const isValid = bCrypt.compareSync(password, user.password);
        if (user && isValid) {
            return user
        } else {
            return new Error('invalid credentials')
        }
    } catch (err) {
        return err
    }
};

module.exports = {
    registerUser,
    authUser,
}
