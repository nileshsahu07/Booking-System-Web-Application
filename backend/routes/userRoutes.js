const express = require("express")
const router = express.Router()
const userController = require("../controller/userController")
const protect = require("../middleware/protect")
const admin = require("../middleware/admin")


router.post("/signup",userController.signup)
router.post("/login",userController.login)
router.get("/all_users",protect, admin, userController.getUsers)
router.get("/deactivate_user/:id",protect,admin, userController.deactivateUser)



module.exports = router