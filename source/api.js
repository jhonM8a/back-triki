const express = require('express')

const api = express.Router()

api.get('/', (request, response)=>{

    response.send({name:'Oscar', number:12})

})

module.exports = api