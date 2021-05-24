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
router.get('/:id', async (req, res)=> {             //id/:id
    try {
        let id = req.params.id;
        res.json(await moviesController.searchById(id));
        
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});

// Getting movies by title

router.get('/title/:title', async (req, res)=> {
    try {  
        let title = req.params.title;
        res.json(await moviesController.searchByTitle(title));
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/genre/:movieGenre', async (req, res)=> {
    try {
        let movieGenre = req.params.movieGenre;
        movieGenre = movieGenre.charAt(0).toUpperCase() + movieGenre.slice(1);
        res.json(await moviesController.searchByGenre(movieGenre));
    } catch (err) {
        return res.status(500).json({
            mensaje: err.message
        });
    }
});


module.exports = router;