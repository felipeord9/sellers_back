"use strict";
const { AGENCY_TABLE, AgencySchema } = require("../models/agencyModel");
const { REGISTRO_TABLE, RegistroSchema } = require('../models/registroModel')
const { CIUDAD_TABLE,CiudadSchema } =require('../models/ciudadModel')
const { USER_TABLE, UserSchema} = require('../models/userModel')
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(AGENCY_TABLE, AgencySchema);
    await queryInterface.createTable(REGISTRO_TABLE,RegistroSchema);
    await queryInterface.createTable(CIUDAD_TABLE,CiudadSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(CIUDAD_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(AGENCY_TABLE);
    await queryInterface.dropTable(REGISTRO_TABLE);
  },
};
