const bCrypt = require('bcrypt');
const User = require('../models/authSchema');

const registerUser = async (email, password) => {
    const salt = await bCrypt.genSalt();
    const hashedPass = bCrypt.hashSync(password, salt)
    return new User({
        email,
        password: hashedPass,
    }).save()
};
const authUser = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        await bCrypt.compareSync(password, user.password);
        if (user) {
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
