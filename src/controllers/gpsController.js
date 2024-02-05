const GpsService = require ('../services/gpsService')

const doFile = async (req, res, next) =>{
    try{
        const { coordenadas } = req.body;
        const data = await GpsService.hacerFiles(coordenadas)
        res.status(201).json({
          message: 'Created',
          data
        })
    }catch (error) {
        next(error);
    }
}

const seeRoute = async (req, res, next) =>{
    try{
        const data = await GpsService.verRecorrido();
        res.status(200).json({
            message: "OK",
            data,
          });
    }catch (error) {
        next(error);
    }
}

module.exports = {
    doFile,
    seeRoute
}