const Category = require('../models').categories

exports.index = (req, res) => {
    Category.findAll({attributes: ['id', 'name']}).then(categories=>res.send(categories))
}

exports.show = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
  Category.findOne({where:{id:req.params.id}, attributes:['id','name']}).then(categories=>res.send(categories))
}

exports.store = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ 2
}