const RegistroService = require("../services/registroService");

const findAllRegistros = async (req, res, next) => {
  try {
    const data = await RegistroService.find();

    res.status(200).json({
      message: "OK",
      data,
    });
  } catch (error) {
    next(error);
  }
};

const findOneRegistro = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    const data = await RegistroService.findOne(id);

    res.status(200).json({
      message: 'OK',
      data,
    });
  } catch (error) {
    next(error)
  }
};

const createRegistro = async (req, res, next) => {
  try {
    const { body } = req
    console.log(body)
    const data = await RegistroService.create(body)
    
    res.status(201).json({
      message: 'Created',
      data
    })
  } catch (error) {
    console.log(error.message)
    next(error)
  }
}

const updateRegistro = async (req, res, next) => {
  try {
    const { params: { id }, body } = req
    const data = await RegistroService.update(id, body)

    res.json(200).json({
      message: 'Updated',
      data
    })
  } catch (error) {
    next(error)
  }
}

const deleteRegistro = async (req, res, next) => {
  try {
    const { params: { id }} = req
    const data = await RegistroService.remove(id)

    res.status(200).json({
      message: 'Deleted',
      data
    })
  } catch (error) {
    next(error)
  }
}

const sendMail = async (req,res,next) =>{
  try{
    const {body} = req
    const data = await RegistroService.enviarCorreo(body)
    res.status(200).json(data)
  }catch (error) {
    next(error)
  }
}

module.exports = {
  findAllRegistros,
  findOneRegistro,
  createRegistro,
  updateRegistro,
  deleteRegistro,
  sendMail,
};