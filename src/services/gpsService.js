const { models } = require('../libs/sequelize')
const fs = require('fs');
const express = require("express");

const hacerFiles = async (coordenadas) =>{
    const newCoordenada = fs.appendFile('coordenadas.txt', `${coordenadas}\n`, (err) => {
        if (err) {
          console.error(err);
        }
      });
      return newCoordenada
}

const verRecorrido = async () =>{
  const rutaArchivo = 'coordenadas.txt';
    const obtener = fs.readFile(rutaArchivo, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return;
      }
      const lineas = data.trim().split('\n');
      const coordenadas = [];
      lineas.forEach((linea, index) => {
        const [latitud, longitud] = linea.split(',');
        coordenadas.push({ latitud: parseFloat(latitud), longitud: parseFloat(longitud) });
      });
      return coordenadas
      /* console.log('Coordenadas leídas del archivo:', coordenadas); */
    });
    return obtener
}

module.exports = {
    hacerFiles,
    verRecorrido,
}