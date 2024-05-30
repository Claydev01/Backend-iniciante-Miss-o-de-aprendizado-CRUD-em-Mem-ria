const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java','kotlin','Android']
//               0       1         2
//Endpoint Read All [GET] /personagem

app.get('/personagem', function(req, res){
  res.send(lista)
})

//Endpoint Real By ID [GET]/personagem/:id
app.get('/personagem/:id', function (req,res){
  //Acessamos o parâmetro de rota ID
  const id  = req.params.id
  //Acessar o item na lista usando ID - 1
  const item = lista[id-1]
  res.send(item)
})

//Sinalizo ao express que estamos usando JSON no body
app.use(express.json())
// Endipoint CREATE [POST]/personagem
app.post('/personagem', function (req, res){
//  Acessamos o BODY da Requisição
const body = req.body

//Acessamos a propriedade 'nome' do body
const novoItem = body.nome 

//Adicionamos na lista
lista.push(novoItem)

//Exibimos uma mensagem de sucesso
res.send('Item adicionado com sucesso:' + novoItem)

})
app.listen(3000)