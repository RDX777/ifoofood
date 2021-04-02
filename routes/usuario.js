const express = require("express")
const router = express.Router()
const bcrypt = require("bcryptjs")
const passport = require("passport")

router.get("/cadastro", (req, res) => {
    res.render("usuarios/cadastro")
})

router.get("/login", (req, res) => {
    res.render("usuarios/login")
})
module.exports = router