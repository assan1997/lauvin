require ('babel-register')

const express = require('express')
const app = express()
const config = require('./configuration/config')

app.set('view engine','ejs')
app.use(express.static('public'))
app.get('/',(request,response)=>{
    response.render('pages/home')
})
app.get('/admin',(request,response)=>{
    response.render('pages/admin.ejs')
})
app.get('/admin-register',(request,response)=>{
    response.render('pages/admin-register.ejs')
})
app.get('/admin-login',(request,response)=>{
    response.render('pages/admin-login.ejs')
})
app.get('/lauvin-piscicole',(request,response)=>{
    response.render('pages/lauvin-piscicole.ejs')
})
app.listen(config.PORT,()=> console.log(`Serveur lancé sur le port ${config.PORT}`))