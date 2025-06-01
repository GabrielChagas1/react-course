const User = require("../models/User")

const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const jwtSecret = process.env.JWT_SECRET

// Generate user token
const generateToken = (id) => {
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "7d"
  })
}

// register user and sign in
const register = async (req, res) => {

  const {name, email, password} = req.body

  const user = await User.findOne({email})

  if(user){
    res.status(422).json({erorros: ["Por favor, utilize outro e-mail"]})
    return
  }

  const salt = await bcrypt.genSalt()
  const passwordHash = await bcrypt.hash(password, salt)

  const newUser = await User.create({
    name,
    email,
    password: passwordHash
  })

  // if user was created successfully, return the token
  if(!newUser) {
    res.status(422).json({erorros: ["Houve um erro, por favor tente mais tarde."]})
  }

  res.status(201).json({
    _id: newUser._id,
    token: generateToken(newUser._id),
    user: newUser
  })
 
}

const login = async (req, res) => {
  const {email, password} = req.body
  const user = await User.findOne({email})

  if(!user){
    res.status(404).json({errors: ["Usuário não encontrado."]})
    return
  }

  console.log(user)

  // check if password matches
  if(!(await bcrypt.compare(password, user.password))){
    res.status(422).json({errors: ["Senha inválida."]})
  }

  res.status(201).json({
    _id: user._id,
    token: generateToken(user._id),
    user: user,
    profileImage: user.profileImage
  })

}

// Get current logged in user
const getCurrentUser = async(req, res) => {
  const user = req.user
  res.status(200).json(user)
}

const update = async (req, res) => {
  const {name, password, bio} = req.body

  let profileImage = null
  if(req.file){
    profileImage = req.file.filename
  }

  const reqUser = req.user

  const user = await User.findById(reqUser._id).select("-password")

  if(name) {
    user.name = name
  }

  if(password) {
    const salt = await bcrypt.genSalt()
    const passwordHash = await bcrypt.hash(password, salt)
    user.password = passwordHash 
  }

  if(profileImage) {
    user.profileImage = profileImage
  }

  if(bio) {
    user.bio = bio
  }

  await user.save()
  res.status(200).json(user)
}

// get user by id
const getUserById = async (req, res) => {
  const {id} = req.params
  try {
    const user = await User.findById(id).select("-password")
    if(!user) {
      res.status(404).json({ errors: ["Usuário não encontrado."] })
      return
    }
    res.status(200).json(user)
  } catch (error) {
    res.status(404).json({ errors: ["Usuário não encontrado."] })
    return
  }

}


module.exports = {
  register,
  login,
  getCurrentUser,
  update,
  getUserById
}