const jwt = require("jsonwebtoken")

module.exports = (req, res, next) =>{
    try {
        const fullToken = req.headers.authorization
        const token = fullToken?.split(' ')[1]
        if(!fullToken ) return res.status(403).send("Access Denied")
        const decodedToken = jwt.verify(token,'Mag' )
        console.log("Token EX:" + token)
        req.user= decodedToken
        next()
    } catch(err){
        console.log('Error:', err);
        res.status(400).send('invalid token')
    }
}