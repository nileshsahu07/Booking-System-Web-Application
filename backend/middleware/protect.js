//yeh token varify ki file hai
const jwt = require("jsonwebtoken")
const User = require("../model/user")

const protect = async (req,res,next)=>{
    // console.log(req.headers)
    //access the token from the req from the frontend
    const authHeader = req.headers.authorization 
    // console.log(authHeader)
    if(authHeader && authHeader.startsWith('Bearer')){

    //extract the token from the authorization string
    const token = authHeader.split(' ')[1]
    //  console.log(token)

    //TODO - We have to varify the token from the frontend
    const decoded = jwt.verify(token, 'this-is-my-secret')
    // console.log(decoded)

    const {id ,role} = decoded

    const user = await User.findById(id)

    if(!user){
        return res.status(400).json({message:"user not found"})
    }

    req.user = user
    next()
    

    }else{
       const error = new Error('Token is Not available')
       error.statusCode = 403
       throw error
    }
}       

module.exports = protect