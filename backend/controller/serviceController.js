const Service = require("../model/service")

exports.createService = async(req,res,next)=>{
    try{
       const service = await Service.create(req.body)

       if(!service){    
            const error = new Error("service not created")
            error.statuscode = 400
            throw error
        }

        res.status(201).json({
            message: 'success',
            service,
        })

    }catch(error){
        next(error)
    }   
}   

exports.getAllservices = async(req,res,next)=>{
    try{    
        const services = await Service.find()
        if(!services){
            const error = new Error("services not found")
            error.statuscode = 400
            throw error
        }
    
        res.status(200).json({
            count:services.length,
            services,
        })
    }catch(error){
        next(error)
    }
    
}

exports.updateServices = async(req,res,next)=>{

    try{
        const id = req.params.id
        const updatedServices = await Service.findByIdAndUpdate(id, req.body,{new:true})

        if(!updatedServices){
            const error = new Error("Service not Updated")
            error.statusCode = 400
            throw error
        }

        res.status(201).json({
            message:"updated successfull",
            updatedServices
        })
    }
    catch(error){
        next(error)
    }
    
}

exports.deleteService = async(req,res,next)=>{
    try{
        const id = req.params.id
        const deleteService = await Service.findByIdAndDelete(id)

        if(!deleteService){
            const error = new Error("failed to delete")
            error.statusCode = 400
            throw error
        }

        res.status(201).json({
            message:'successfully deleted',
            deleteService
        })
    }
    catch(error){
        next(error)
    }
}