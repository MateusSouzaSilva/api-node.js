const fs = require('fs');

fs.readFile('./assets/shihtzu.jpeg', (erro, buffer) => {   
    console.log('A imagem recebeu buffer');
    console.log(buffer);

    fs.writeFile('./assets/shihtzu2.jpeg', buffer, (erro) => {
        console.log('imagem foi escrita');
    })
});
