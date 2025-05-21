const Photo = require("../models/Photo")
const User = require("../models/User")
const path = require("path");
const fs = require("fs")
const mongoose = require("mongoose")

// insert a photo, with an user related to it
const insertPhoto = async(req, res) => {
  const {title} = req.body
  const  image = req.file.filename

  const reqUser = req.user;
  const user = await User.findById(reqUser._id)

  // create a photo
  const newPhoto = await Photo.create({
    image, 
    title,
    userId: user._id,
    userName: user.name
  })

  // if photo was created sucessfuly, return data
  if(!newPhoto){
    res.status(422).json({
      errors: ["Houve um problema, por favor tente novamente mais tarde."]
    })
    return
  }
  res.status(201).json(newPhoto)
}

// remove a photo from DB
const deletePhoto = async(req, res) => {
  const { id } = req.params
  const reqUser = req.user
  
  try {
    const photo = await Photo.findById(id)

    if(!photo) {
      res.status(404).json({errors: ["Foto não encontrada"]})
      return
    }

    // check if photo belongs to user
    if(!photo.userId.equals(reqUser._id)){
      res.status(404).json({errors: ["ocrreu um erro, por favor tente novmente mais tarde."]})
      return
    }

    // Delete the physical file
    const filePath = path.join(__dirname, '../uploads/photos', photo.image);

    // __dirname é o diretório atual do arquivo
    if (fs.existsSync(filePath)) {
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Erro ao deletar o arquivo físico:', err);
            } else {
                console.log('Arquivo físico deletado com sucesso:', filePath);
            }
        });
    } else {
        return console.warn('Arquivo físico não encontrado:', filePath);
    }

    await Photo.findByIdAndDelete(photo._id);
    res.status(200).json({ id: photo._id, message: "Foto excluída com sucesso."})

  } catch (error) {
    console.log(error)
    res.status(404).json({errors: ["Foto não encontrada."]})
    return
  }

}

// get all photos
const getAllPhotos = async(req, res) => {
  const photos = await Photo.find({}).sort([["createdAt", -1]]).exec()
  return res.status(200).json(photos)
}

// get user photos
const getUserPhotos = async(req, res) => {
  const {id} = req.params
  const photos = await Photo.find({userId: id}).sort([["createdAt", -1]]).exec()
  return res.status(200).json(photos)
}

// get photo by id
const getPhotoId = async (req, res) => {
  const {id} = req.params
  const photo = await Photo.findById(id)
  if(!photo){
    res.status(404).json({ errors: ["Foto não encontrada."] })
  }
  return res.status(200).json(photo)

}

// update a photo
const updatePhoto = async(req, res) => {
  const {id} = req.params
  const {title} = req.body
  const reqUser = req.user

  const photo = await Photo.findById(id)

  // check if photo exists
  if(!photo){
    res.status(404).json({errors: ["Foto não encontada"]})
    return
  }

  // check if photo belongs to user
  if(!photo.userId.equals(reqUser._id)){
    res.status(422).json({errors: ["Ocorreu um erro, por favor tente novamente mais tarde."]})
    return
  }

  if(title){
    photo.title = title
  }

  await photo.save()

  res.status(200).json({photo, message: "Foto atualizada com sucesso!"})

}

// Like functionality
const likePhoto = async (req, res) => {
  const { id } = req.params
  const reqUser = req.user

  const photo = await Photo.findById(id)
  
  // check if photo exists 
  if(!photo){
    res.status(404).json({errors: ["Foto não encontada"]})
    return
  }

  if(photo.likes.includes(reqUser._id)){
    res.status(422).json({errors: ["Você já curtiu a foto."]})
    return
  }

  // put user id in likes array
  photo.likes.push(reqUser._id)
  photo.save()

  res.status(200).json({photoId: id, userId: reqUser._id, message: "A foto foi curtida com sucesso."})

}

// comment functionality
const commentPhoto = async(req, res) => {
  const { id } = req.params
  const comment = req.body

  const reqUser = req.user
  const user = await User.findById(reqUser._id)

  const photo = await Photo.findById(id)

  // check if photo exists
  if(!photo){
    res.status(404).json({errors: ["Foto não encontada"]})
    return
  }

  // put comment in the array comment
  const userComment = {
    comment,
    userName: user.name,
    userImage: user.profileImage,
    userId: user._id
  }

  photo.comments.push(userComment)

  await photo.save()

  res.status(200).json({
    comment: userComment,
    message: "O comentário foi adicionado com sucesso."
  })

}

// search photos by title
const searchPhotos = async(req, res) => {
  const {q} = req.query
  const photos = await Photo.find({title: new RegExp(q, "i")}).exec()
  res.status(200).json(photos)
}

module.exports = {
  insertPhoto,
  deletePhoto,
  getAllPhotos,
  getUserPhotos,
  getPhotoId,
  updatePhoto,
  likePhoto,
  commentPhoto,
  searchPhotos
}