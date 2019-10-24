const express = require('express')
const chalk = require('chalk')
const api = require('./source/api')
const cors = require("cors")


const port = process.env.PORT || 3003
const app = express()
app.use(cors())
app.use(api)

app.listen(port, () => {
    console.log(`${chalk.green('[back-triki]')}: server init in port : ${port}`)
})