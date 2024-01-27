const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { Op } = require('sequelize')
const MailService = require('./mailService')

const find = async () => {
  const registros = await models.Registro.findAll({
  })
  return registros
}

const findOne = async (id) => {
  const registros = await models.Registro.findByPk(id)

  if(!registros) throw boom.notFound('Registro no encontrado')

  return registros
}

const create = async (body) => {
    const newRegistro = await models.Registro.create(body)
    return newRegistro  
}

const update = async (id, changes) => {
  const Registro = await findOne(id)
  const updatedRegistro = await Registro.update(changes)

  return updatedRegistro
}

const remove = async (id) => {
  const Registro = await findOne(id)
  await Registro.destroy(id)
  return id
}

const enviarCorreo = async (body)=>{
  try{
     const mail = {
        from:'Ventas@granlangostino.net',
        to: body.correo,
        subject:'Se ha registrado movimiento',
        html:`<p>El vendedor ${body.vendedor} ha registrado una visita
        al cliente ${body.cliente}, ingresa al aplicativo para
        ver más detalles.</p>
        <p>https://pedidos.granlangostino.net:5521/login/</p>`
     }
     const respuesta = await MailService.sendEmails(mail)
     return respuesta
  }catch (error) {
    console.error('Error al solicitar recuperación de contraseña:', error);
    return res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove,
  enviarCorreo,
}