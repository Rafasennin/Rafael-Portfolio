const mongoose = require("mongoose");
const MongoModel = require("../data-base/mongoModel.js"); // Importe o modelo mongoose aqui
const mongoUrl = "mongodb+srv://rafasennin:Sennin007@cluster0.pdpdhin.mongodb.net/user-contact";

mongoose.connect(mongoUrl)
  .then(() => {
    console.log("Conexão estabelecida com sucesso com o MongoDB");
  })
  .catch(error => {
    console.error("Erro ao conectar com o MongoDB:", error);
  });

const userContact = new MongoModel({ // Use o modelo mongoose importado aqui
  name: "this.contato.nome",
  email: "this.contato.email",
  message: "this.contato.message",
});

/*
userContact.save()
  .then(() => {
    console.log("Usuário cadastrado com sucesso");
  })
  .catch(erro => {
    console.log(erro);
  });

MongoModel.find({}) // Use o modelo mongoose importado aqui
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
  */
