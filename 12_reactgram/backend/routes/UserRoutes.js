const express = require("express")
const router = express.Router()

const {register, login, getCurrentUser, update, getUserById} = require("../controllers/UserController")
const validate = require("../middlewares/handleValidation")
const {imageUpload} = require("../middlewares/imageUpload")
const { userCreateValidations, loginValidation, userUpdateValidation } = require("../middlewares/userValidations")

const authGuard = require("../middlewares/authGuard")

router.post("/register", userCreateValidations(), validate, register)
router.post("/login", loginValidation(), validate, login)
router.get("/profile", authGuard, getCurrentUser)
router. put("/", authGuard, userUpdateValidation(), validate, imageUpload.single("profileImage"), update)
router.get("/:id", getUserById)

module.exports = router