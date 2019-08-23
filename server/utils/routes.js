const Animals = require('../controllers/animals');

module.exports = app => {
    app.get("/animals", Animals.getAll);
    app.get("/animals/:_id", Animals.getOne);
    app.post("/animals", Animals.create);
    app.put("/animals/:_id", Animals.update);
    app.delete("/animals/:_id", Animals.remove);
}