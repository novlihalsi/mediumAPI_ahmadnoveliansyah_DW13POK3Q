const Articles = require('../models').articles
const Users = require('../models').users
const Categories = require('../models').categories

exports.index = (req, res) => {
  Articles.findAll({include:[{model: Users, as: "usersId"}, {model: Categories, as: "categoriesId" }]}).then(articles=>res.send(articles))
}

exports.show = (req, res) => {
    
  Articles.findOne({where:{id:req.params.id}}).then(articles=>res.send(articles))
}

exports.recentarticles = (req, res) => {
  Articles.findAll({
    include:[{model: Users, as: "usersId"}, {model: Categories, as: "categoriesId" }],
    limit:5,
    order:[['id', 'DESC']]
    
  })
  .then(articles=>res.send(articles))
}

exports.store = (req, res) => {
    
}

exports.update = (req, res) => {
    
}

exports.delete = (req, res) => {
    
}