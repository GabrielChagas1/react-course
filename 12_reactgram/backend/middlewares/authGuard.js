const User = require("../models/User")
const jwt = require("jsonwebtoken")
const jwtSecret = process.env.JWT_SECRET

  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]
