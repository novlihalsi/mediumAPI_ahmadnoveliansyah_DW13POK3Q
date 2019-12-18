
require('express-group-routes')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5000


app.use(bodyParser.json())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const CategoriesController = require('./controllers/categories')


app.group("/api/v1", (router) => {
  router.get('/categories', CategoriesController.index) 
  router.get('/categories/:id', CategoriesController.show)
})

app.get('/', (req, res) => {
    res.send('Hello World')
})    

app.listen(port, () => console.log(`Listening on port ${port}!`))