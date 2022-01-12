const nbCode = () => {
    var fs = require('fs');

    fs.readFile('./mytest.txt', (error, data) => {
        if (error) return console.log(error);
        console.log(data.toString());
    });
    console.log('Program ended');
};
// readFile is an asynx equivalent of feadFileSync

module.exports = nbCode;
