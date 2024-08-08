const Service = require("../model/service")

exports.createService = async(req,res,next)=>{
    try{
       const service = await Service.create(req.body)

       if(!service){    
            const error = new Error("Service is not created")
            error.statuscode = 400
            throw error
        }

        res.status(201).json({
            message: 'Successfully created',
            service,
        })

    }catch(error){
        next(error)
    }   
}   

exports.getAllServices = async(req,res,next)=>{
    try{    
        const services = await Service.find()
        if(!services){
            const error = new Error("Services is not found")
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
            const error = new Error("Service is not Updated")
            error.statusCode = 400
            throw error
        }

        res.status(201).json({
            message:"Updated service successfully",
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
            const error = new Error("Failed to delete service")
            error.statusCode = 400
            throw error
        }

        res.status(201).json({
            message:'Deleted service successfully',
            deleteService
        })
    }
    catch(error){
        next(error)
    }
}