//Добавляем в базу данных объекты

const {Type} = require('../models/models')
const ApiError = require('../error/ApiError')

//Создаем контроллеры для каждой части приложения 

class TypeController {
    async create(req, res){
        const {name} = req.body
        const type = await Type.create({name})
        return res.json(type)
    }

    async getAll(req, res){
        const types = await Type.findAll()
        return res.json(types)
    }

}

module.exports = new TypeController()