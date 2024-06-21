const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.signup = async(req,res,next)=>{
    try{
        console.log(req.body)
        const {name,email,password,role} = req.body

        const existingUser = await User.find({email})
        console.log('existingUser' , existingUser)

        const user = await User.create(req.body)

        res.status(201).json({
            user
        })
    }
    catch(error){
        res.status(400).json({
            error:error.message
        })
    }
}

exports.login = async(req,res,next)=>{
    try{
        const {email,password} = req.body
        const user = await User.find({email})
        console.log(user)
        console.log(user[0].password)

        //check if user exist
        if(!user){
            const error = new Error('user is not ragistered', 'please ragister first')
            error.statuscode = 400
            throw error 
        }
            const MatchPassword = await bcrypt.compare(password, user[0].password) 
            console.log(MatchPassword) 
        //match password
        if(!MatchPassword){
            console.log(MatchPassword)
            const error = new Error("password did not match")
            error.statuscode = 400
            throw error 
        }
        
        //send the token to the frontend

        const token = jwt.sign({id:user[0]._id, role:user[0].role, name:user[0].name}, 'this-is-my-secret',
        {expiresIn:'30d'})
        console.log(token)

        res.status(200).json({
            message:"success",
            token
        })
        
    }
    catch(error){
        next(error)
    }
}

exports.getUsers = async(req,res,next)=>{
    try {
      const users = await User.find({ role: { $ne: 'admin' } }) //iska matlab not equal to admin matlab admin nhi aayega isme
     console.log(users)
  
     if(!users){
         const error = new Error('Users not found');
         error.statusCode = 404 ;
         throw error
     }
     res.status(200).json({
         length : users.length ,
         message : 'success' ,
         users
     })
    } catch (error) {
       next(error)
    }
  }