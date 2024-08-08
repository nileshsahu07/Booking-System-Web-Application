const User = require("../model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

exports.signup = async(req,res,next)=>{
    try{
        const {name,email,password,role} = req.body

        const existingUser = await User.find({email})

        // if(existingUser){
        //     const error = new Error('You are already registered with this email, Please try again with new')
        //     error.statuscode = 400
        //     throw error 
        // }

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
        
        if(!user){
            const error = new Error('user is not registered', 'please register first')
            error.statuscode = 400
            throw error 
        }

        if(user[0].isActive === false){
          const error = new Error("Your account is deactivate , Please Contact to the Admin")
          error.statusCode = 400;
          throw error;
        }
        
        const MatchPassword = await bcrypt.compare(password, user[0].password) 

        //match password
        if(!MatchPassword){
            const error = new Error("Wrong Password")
            error.statuscode = 400
            throw error 
        }
        
        //send the token to the frontend

        const token = jwt.sign({id:user[0]._id, role:user[0].role, name:user[0].name}, 'this-is-my-secret',
        {expiresIn:'30d'})

        res.status(200).json({
            message:"Successfully Login",
            token
        })
        
    }
    catch(error){
        next(error)
    }
}

exports.getUsers = async(req,res,next)=>{
    try {
    //   const users = await User.find({ role: { $ne: 'admin' } }) //iska matlab not equal to admin matlab admin nhi aayega isme

    const users = await User.find()
  
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


  exports.deactivateUser = async(req,res,next) => {
    try{
      const {id} = req.params ;
      const user = await User.findById(id) ;
       if(!user){
         const error = new Error('Users not found');
         error.statusCode = 404 ;
         throw error
     }
    user.isActive = false ;
    await user.save()
  res.status(200).json({
    user
  })
    }catch(error){
  
    }
  }

  exports.activateUser = async(req,res,next) => {
    try{
      const {id} = req.params ;
      const user = await User.findById(id) ;
       if(!user){
         const error = new Error('Users not found');
         error.statusCode = 404 ;
         throw error
     }
    user.isActive = true ;
    await user.save()
  res.status(200).json({
    user
  })
    }catch(error){
  
    }
}