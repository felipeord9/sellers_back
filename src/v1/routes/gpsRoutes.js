const express = require("express");
const passport = require('passport')
const router = express.Router();
const fs = require('fs');
const GpsController = require('../../controllers/gpsController')

router
  /* .get('/obtener-coordenadas',GpsController.seeRoute) */
  .get('/obtener-coordenadas', async (req, res)=>{
    const rutaArchivo = 'coordenadas.txt';
    fs.readFile(rutaArchivo, 'utf8', (err, data) => {
      if (err) {
        console.error('Error al leer el archivo:', err);
        return;
      }
      const lineas = data.split('\n');
      const coordenadas = lineas.map(linea => {
        const [latitud, longitud] = linea.trim().split(',').map(parseFloat);
        return [latitud, longitud];
      });
      /* const lineas = data.trim().split('\n');
      const coordenadas = [];
      lineas.forEach((linea, index) => {
        const [latitud, longitud] = linea.split(',');
        coordenadas.push({ latitud: parseFloat(latitud), longitud: parseFloat(longitud) });
      }); */
      /* console.log('Coordenadas leídas del archivo:', coordenadas); */
      return res.status(200).json( coordenadas );
    });
  })
  .post('/',GpsController.doFile)
module.exports = router