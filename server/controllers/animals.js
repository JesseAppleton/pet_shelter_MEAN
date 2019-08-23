const mongoose = require('mongoose');
const Animal = mongoose.model("Animal");

class AnimalController {
    getAll(req, res){
        Animal.find({}).sort('species')
            .then(animals => res.json(animals))
            .catch(err => res.json(err));
    }
    getOne(req, res){
        Animal.findOne({_id: req.params._id})
            .then(animal => res.json(animal))
            .catch(err => res.json(err));
    }
    create(req, res){
        let animal = new Animal(req.body);
        animal.save()
            .then(() => res.json(animal))
            .catch(err => res.json(err));
    }
    update(req, res){
        Animal.findOneAndUpdate({_id: req.params._id}, req.body)
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
    remove(req, res){
        Animal.findOneAndRemove({_id: req.params._id})
            .then(() => res.json({status: "ok"}))
            .catch(err => res.json(err));
    }
}

module.exports = new AnimalController();