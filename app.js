
const bodyParser = require('body-parser');
const express = require('express');
const dialogflow = require('dialogflow');
const { WebhookClient } = require('dialogflow-fulfillment'); 
//app.post(express.json());

const app = express().use(bodyParser.json());
const port = process.env.PORT || 5000



app.post('/webhook', (request,response) => {
  const _agent = new WebhookClient({ request: request, response: response });
   
  function welcome(agent) {    
    agent.add('Oi 👩🏽‍🎤 Boa Noite!' +'\n'+'\n'+
             'Seja muito bem vindo(a) ao nosso chatbot para Whatsapp' +'\n'+'\n'+
             'Digite *Iniciar* para se inscrever no *Sorteio*');
  }
  
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome); 
  _agent.handleRequest(intentMap);
});

app.get("/", (req, res) =>{
  res.send("Hello Word! Esse é o meu primeiro webhook para o Dialogflow.")
})

app.listen(port,() =>{
  console.log("Servidor ligado na porta : ", port)
});