'use strict';
const { DEPARTAMENTO_TABLE, DepartamentoSchema} = require('../models/departamentoModel');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(DEPARTAMENTO_TABLE,DepartamentoSchema);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(DEPARTAMENTO_TABLE);

  }
};
