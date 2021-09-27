const fs = require('fs');

fs.createReadStream('./assets/shihtzu.jpeg')
    .pipe(fs.createWriteStream('./assets/shihtzu-stream.jpeg'))
    .on('finish', () => console.log('Imagem foi escrita'));
