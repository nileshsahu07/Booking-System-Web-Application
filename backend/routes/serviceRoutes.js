const express = require('express')
const router = express.Router()
const protect =  require("../middleware/protect")
const admin =  require("../middleware/admin")

const serviceController = require('../controller/serviceController')

router.post("/create_services", protect, admin, serviceController.createService)
router.get("/get_allservices",serviceController.getAllservices)
router.put("/update_services/:id",protect,admin,serviceController.updateServices)
router.delete("/delete_service/:id",protect,admin,serviceController.deleteService)



module.exports = router;