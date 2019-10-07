const csvToJson = require('csvtojson');

csvToJson().fromFile('./test.csv')
.then(source => {
    console.log(source);
});