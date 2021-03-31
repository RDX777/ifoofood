const path = require('path')

const express = require('express')
const app = express()

const handlebars = require('express-handlebars')

const bodyParser = require('body-parser')

//Configurações
    //body parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // pasta Public
        app.use(express.static(path.join(__dirname, 'public')))

app.get("/", (req, res) =>{
    let data = new Date();
    res.render("index", {ano: "2021 - " + data.getFullYear()})
})

const PORT = process.env.Port || 8081

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta: " + PORT)
})
