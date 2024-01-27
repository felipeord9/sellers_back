const express = require('express')
const UserRoutes = require('./userRoutes')
const CiudadRoutes = require('./ciuidadRoutes')
const MailRoutes = require('./mailRoutes')
const AuthRoutes = require('./authRoutes')
const AgencyRoutes = require('./agencyRoutes')
const RegistroRoutes = require('./registroRoutes')

function routerApi(app) {
    const router = express.Router()

    app.use('/api/v1/', router)

    router.use('/auth', AuthRoutes)
    router.use('/users', UserRoutes)
    router.use('/mail', MailRoutes)
    router.use('/ciudades',CiudadRoutes )
    router.use('/agencies', AgencyRoutes)
    router.use('/registro',RegistroRoutes)
    
    }
module.exports = routerApi