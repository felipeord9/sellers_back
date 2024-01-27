const express = require("express");
const passport = require('passport')
const RegistroController = require("../../controllers/registroController");

const router = express.Router();

router
  .get("/", RegistroController.findAllRegistros)
  .get("/:id", RegistroController.findOneRegistro)
  .post('/', RegistroController.createRegistro)
  .post('/send/mail',RegistroController.sendMail)
  .patch('/:id', RegistroController.updateRegistro)
  .delete('/:id', RegistroController.deleteRegistro)

module.exports = router