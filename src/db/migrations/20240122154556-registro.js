'use strict';
const { AGENCY_TABLE, AgencySchema } = require("../models/agencyModel");
const { REGISTRO_TABLE, RegistroSchema } = require('../models/registroModel')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(AGENCY_TABLE, AgencySchema);
    await queryInterface.createTable(REGISTRO_TABLE,RegistroSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(AGENCY_TABLE);
    await queryInterface.dropTable(REGISTRO_TABLE);

  }
};
