require("dotenv").config();
const express = require('express')
const MailController = require('./app/controllers/mailController')
const cors = require('cors')
const Queue = require('./app/lib/Queue')
const auth = require('./config/conn')

const port = process.env.PORT || 3000
const app = express()

//Indicando para a aplicação o tamanho máximo do corpo das requisições recebidas.
app.use(express.json({limit:'50mb'}))
app.use(express.urlencoded({limit: '50mb'}))

//Criando middleware para todas requisições recebidas.
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, HEAD, POST");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  app.use(cors())
  next()
})

//Rota para envio de e-mails.
app.post('/sendmail', acess, MailController.store)

//Rota padrão para testes.
app.get('/', acess,function (req, res) {
  res.send('Ok!')
})

//Middleware para verificação de acesso a aplicação.
function acess(req, res, next){
  //Recebendo do cabeçalho da requisição o token de autorização.
  const authHeader = req.headers['authorization']
  const bearer = authHeader.split(' ')[0]
  const token = authHeader && authHeader.split(' ')[1]
  //Verificando se existe um token e se ele é igual ao token esperado na aplicação.
  if((!token) || (token !== auth.TOKEN) || (bearer !== 'Bearer')) return res.sendStatus(500)
  next()
}

//Server sendo inicializado e processando as filas criadas.
app.listen(port, ()=>{
    console.log('Server listening on http://localhost:'+ port)
}) 