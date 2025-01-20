//yeh token varify ki file hai
const jwt = require("jsonwebtoken")

const auth = async (req,res,next)=>{
    const authHeader = req.headers.authorization 

    if(authHeader && authHeader.startsWith('Bearer')){

    const token = authHeader.split(' ')[1]


    //TODO - We have to varify the token from the frontend
    const decoded = jwt.verify(token, 'this-is-my-secret')

    const {id} = decoded

    req.userId = id
    next()

    }else{
       const error = new Error('Token is Not available')
       error.statusCode = 403
       throw error
    }
}       

module.exports = auth