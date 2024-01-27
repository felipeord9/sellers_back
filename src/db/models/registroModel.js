const { Model, DataTypes, Sequelize } = require("sequelize");

const REGISTRO_TABLE = 'registro'

const RegistroSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement:true,
  },
  centroDeOperacion: {
    type: DataTypes.STRING,
    allowNull: false,
    field:'centro_de_operacion',
  },
  tipoCliente:{
    type: DataTypes.STRING,
    allowNull: false,
    field:'tipo_cliente',
  },
  razonSocial:{
    type: DataTypes.STRING,
    allowNull: false,
    field: "razon_social",
  },
  nit:{
    type: DataTypes.STRING,
    allowNull: false,
    field: "nit",
  },
  direccion:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  telefono:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  ciudad:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  contacto:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  correoElectronico:{
    type: DataTypes.STRING,
    allowNull: false,
    field: "correo_electronico",
  },
  motivoVisita:{
    type: DataTypes.STRING,
    allowNull: false,
    field: "motivo_visita",
  },
  notas:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  fechaCreacion:{
    type: DataTypes.DATE,
    allowNull: false,
    field: "fecha_creacion",
  },
  usuarioCreador:{
    type:DataTypes.STRING,
    allowNull:false,
    field:'usuario_creador'
  },
  longitud:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  latitud:{
    type:DataTypes.STRING,
    allowNull:false,
  }
}

class Registro extends Model {
  static associate(models) {
    //
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REGISTRO_TABLE,
      modelName: 'Registro',
      timestamps: false
    }
  }
}

module.exports = {
  REGISTRO_TABLE,
  RegistroSchema,
  Registro
}