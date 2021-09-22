//customExpress serve para configurar o express antes de usa-lo
const express = require('express');
//Consign agrupa as rotas de outros lugarem e coloca dentro do app 
const consign = require('consign');
const bodyParser = require('body-parser');

//cria, configura e retorna a variavel app 
module.exports = () => {
    const app = express();
    // Consign está incluindo todos os controllers dentro do app

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    consign().include('controllers').into(app);

    return app

}

