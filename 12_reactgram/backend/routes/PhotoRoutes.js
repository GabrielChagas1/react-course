const express = require("express")
const router = express.Router()

const {insertPhoto, deletePhoto, getAllPhotos, getUserPhotos, getPhotoId, updatePhoto, likePhoto, commentPhoto, searchPhotos} = require("../controllers/PhotoController")



const {photoInsertValidation, photoUpdateValidation, photoCommentValidation} = require("../middlewares/photoValidation")
const validate = require("../middlewares/handleValidation")
const authGuard = require("../middlewares/authGuard")
const {imageUpload} = require("../middlewares/imageUpload")



router.post("/", authGuard, imageUpload.single("image"), photoInsertValidation(), validate, insertPhoto)
router.delete("/:id", authGuard, deletePhoto)
router.get("/", authGuard, getAllPhotos)
router.get("/user/:id", authGuard, getUserPhotos)
router.get("/search", authGuard, searchPhotos)
router.get("/:id", authGuard, getPhotoId)
router.put("/:id", authGuard, photoUpdateValidation(), validate, updatePhoto)
router.put("/like/:id", authGuard, likePhoto)
router.put("/comment/:id", authGuard, photoCommentValidation(), validate, commentPhoto)


module.exports = router