const router = require("express").Router();
const moviesController = require("../controllers/moviesController.js");

// CRUD

router.get('/', async (req, res) => {
    try {
        res.json(await moviesController.findTopRated());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

//Búsqueda de película por ID
router.post('/id', async (req, res)=> {             //id/:id
    try {
        let id = req.body.id;
        res.json(await moviesController.searchById(id));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

// Getting movies by title

router.post('/title', async (req, res)=> {
    try {  
        let title = req.body.title;
        res.json(await moviesController.searchByTitle(title));
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/actor', async (req, res)=> {
    try {  
        let actor = req.body.actor;
        res.json(await moviesController.searchByAct(actor));
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post('/genre', async (req, res)=> {
    try {
        let movieGenre = req.body.genre;
        movieGenre = movieGenre.charAt(0).toUpperCase() + movieGenre.slice(1);
        res.json(await moviesController.searchByGenre(movieGenre));
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;