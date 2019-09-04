
module.exports = (app) => {

const book = require('../controllers/book.controller.js');

app.post('/createbook', book.create);

app.get('/books', book.findAll);

}







