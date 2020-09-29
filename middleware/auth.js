const jwt = require('jsonwebtoken');
const secretWord = process.env.SECRET_WORD


module.exports = (req,res,next)=>{
        // console.log();
        const authHeader = req.get('Autorization');
        if(!authHeader) {
            res.status(401).json({message: 'Token not provided'})
        }
        const token = authHeader.replace('Bearer ', '');
        try{
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