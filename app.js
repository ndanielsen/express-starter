const express = require('express')
const app = express();

config = {
    port: 3000
}

app.route('/ok')
    .get((req, res)=>{
        res.sendStatus(200)
    })

app.listen(config.port, () => {
    console.log(`Listening on ${config.port}.`)
})

module.exports = app