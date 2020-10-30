const jwt = require('jsonwebtoken');
const secretWord = process.env.SECRET_WORD


module.exports = (req,res,next)=>{
        const authHeader = req.headers.authorizations
        if(!authHeader) {
            res.status(401).json({message: 'Token not provided'})
        }
        try{
            const token = authHeader.replace('Bearer ', '');
            jwt.verify(token,secretWord)
        } catch (err) {
            if(err instanceof jwt.JsonWebTokenError){
                res.status(401).json({message: 'Invlaid token'})
            } else {
                next(err)
            }
        }
        next()
}