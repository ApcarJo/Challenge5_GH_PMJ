const router = require("express").Router();
const seriesController = require("../controllers/seriesController.js");

// CRUD
// GET

router.get("/id", async (req,res) =>{
    try{
        let id = req.body.id;
        res.json(await seriesController.searchById(id));
    }catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
});

router.get('/ontheair7', async (req,res)=> {
    try {
        res.json(await seriesController.findOnTheAir7())
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
})

router.post("/title", async (req,res) => {
    try {
        let tvTitle = req.body.title;
        tvTitle = tvTitle.charAt(0).toUpperCase() + tvTitle.slice(1);
        res.json(await seriesController.searchByTvTitle(tvTitle));
    } catch (err) {
        return res.status(500).json({
            message: err.message
        });
    }
});

router.post("/screenedtheater", async (req, res) => {
    try{
        let id = req.body.id;
        res.json(await seriesController.screenedTheater(id));
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})

router.get("/toprated", async (req, res) => {
    try{
        res.json(await seriesController.topRated());
    } catch (err){
        return res.status(500).json({
            message: err.message
        });
    }
})


module.exports = router;