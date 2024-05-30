const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

const lista = ['Java','kotlin','Android']
//               0       1         2
//Endpoint Read All [GET] /personagem

app.get('/personagem', function(req, res){
  res.send(lista.filter(Boolean))
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
//checar se o 'nome' está presente no body
  if(!novoItem){
  return res.send('corpo de requisicão deve conter a propriedade `nome`.')
  }
//Checar se o novo item está na lista ou não
  if(lista.includes(novoItem)){
    return res.send( 'Esse item ja está na lista')
  }


//Adicionamos na lista
  lista.push(novoItem)

//Exibimos uma mensagem de sucesso
  res.send('Item adicionado com sucesso:' + novoItem)

})

//Endpoint Update [PUT]/personagem/:id
app.put('/personagem/:id',function(req,res){
  const id = req.params.id
  //Acessamos o body da requisicão
  const body = req.body

  //acessamos a proriedade 'nome' do body
  const novoItem = body.nome
  //checar se o 'nome' está presente no body
  if(!novoItem){
    return res.send('corpo de requisicão deve conter a propriedade `nome`.')
    }
  //Checar se o novo item está na lista ou não
    if(lista.includes(novoItem)){
      return res.send( 'Esse item ja está na lista')
    }
  //Atualizamos na lista o novoItem pelo id - 1
  lista[id-1]=novoItem
  //Enviamos mensagem de sucesso
  res.send('Item atualizado com sucesso:'+id+'-'+novoItem)

})

//Endpoint DELETE[DELETE]   /personagem/:id
app.delete('/personagem/:id', function (req,res){
  
  //Acessamos o parâmetro de rota
  const id=req.params.id
  //Remover o item da lista usando o id-1
  delete lista[id-1]
  //Enviamos uma mensagem de sucesso
  res.send('Item removido com sucesso:'+id)
})
app.listen(3000)