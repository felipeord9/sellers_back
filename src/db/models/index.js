const { User, UserSchema } = require('./userModel')
const { Ciudad, CiudadSchema} = require('./ciudadModel')
const { Agency, AgencySchema } = require('./agencyModel')
const { Registro, RegistroSchema} = require('./registroModel')
const { Departamento,DepartamentoSchema } = require('./departamentoModel')

function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Ciudad.init(CiudadSchema,Ciudad.config(sequelize))
  Agency.init(AgencySchema,Agency.config(sequelize))
  Registro.init(RegistroSchema,Registro.config(sequelize))
  Departamento.init(DepartamentoSchema, Departamento.config(sequelize))

  User.associate(sequelize.models)
  Ciudad.associate(sequelize.models)
  Agency.associate(sequelize.models)
  Registro.associate(sequelize.models)
  Departamento.associate(sequelize.models)

}
module.exports = setupModels