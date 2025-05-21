const {body} = require("express-validator")

const photoInsertValidation = () => {
  return [
    body("title").not().equals("undefined").withMessage("O título é obrigatório.").isString().withMessage("o título é obrigatório.").isLength(3).withMessage("o título precisa ter no mínimo 3 caracteres."),
    body("image").custom((value, {req}) => {
      if(!req.file){
        throw new Error("A imagem é obrigatória.")
      }
      return true
    })
  ]
}

const photoUpdateValidation = () => {
  return [
    body("title").isString().withMessage("O título é obrigatório.").isLength(3).withMessage("o título precisa ter no mínimo 3 caracteres."),

  ]
}

const photoCommentValidation = () => {
  return [
    body("comment").isString().withMessage("O comentário é obrigatório.")

  ]
}

module.exports = {
  photoInsertValidation,
  photoUpdateValidation,
  photoCommentValidation
}