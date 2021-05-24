# Challenge 4: Movies Website Backend
## Made by [Pedro Agulló](https://github.com/PedroAgullo), [Jose Luis Aparicio](https://github.com/ApcarJo) and [Miguel Torres](https://github.com/migueltmsp)<br>
## Hecho por [Pedro Agulló](https://github.com/PedroAgullo), [Jose Luis Aparicio](https://github.com/ApcarJo) and [Miguel Torres](https://github.com/migueltmsp)<br>

This project was proposed and deployed on the 4th week of [GeeksHubs' Full Stack Developer Bootcamp](https://geekshubsacademy.com/)

Este proyecto se propuso e implementó en la cuarta semana del [Bootcamp Full Stack Developer de GeeksHubs](https://geekshubsacademy.com/)

## Index
English
* [Goal and used technologies](##Goal)
* [Common part](##Common-part)
* [Pedro's part](##Pedro's-part)
* [Jose Luis' part](##Jose-Luis'-part)
* [Miguel's part](##Miguel's-part)
* [Conclusions](##Conclusions)

Español
* [Objetivo y tecnologías empleadas](##Objetivo-y-tecnologías-empleadas)
* [Parte en común](##Parte-en-común)
* [Sección de Pedro](##Sección-de-Pedro)
* [Sección de Jose Luis](##Sección-de-Jose-Luis)
* [Sección de Miguel](##Sección-de-Miguel)
* [Conclusiones](##Conclusiones)

## English
## Goal and used technologies

The aim of the project was to develop an API directed to concrete moviedatabase DB endpoints, in order to address to the following functions: <br>

* Obtaining a list of the top rated films
* Obtaining a movie given its id
* Obtaining a movie given its title
* Obtaining movies given a genre (indicating **name**, not **id**)
* Obtaining a list of the top rated series
* Obtaining a series given its id
* Obtaining a series given their title
* Obtaining series which will have at least one episode aired in the next seven days
* Obtaining series which are screened on theathers

With that in mind, and taking into consideration that our team was composed of three people, each one of us handled three of those tasks.

## Common part

### index.js
```
const express = require('express');
const app = express();
const port = 3000;
const router = require('./router');

app.use(router);
app.use(express.json());

app.listen(port, () => console.log(`Node server running on http://localhost:${port}`));

```

This js file:
1. imported the **Express.js** library,
2. saved its functionalities on "app",
3. selected 3000 as the server's port and
4. linked **router.js**.

Then, the router.js' and express.json()' functionalities were "used", or, we assume, loaded in memory.

**app.listen() _started_ a local node.js server that uses the 3000 port.**
<br>

### router.js
```
const router = require('express').Router();

const moviesRouter = require('./routes/moviesRouter.js');
const seriesRouter = require('./routes/seriesRouter.js');

router.use('/movies', moviesRouter);
router.use('/series', seriesRouter);


module.exports = router;

```
This js file **imports the .Router() utility from Express.js**, which is used to **link the moviesRouter and seriesRouter paths, and therefore their content, to index.js**. In this sense, **router.js is merely a link between the main application (index.js) to its dependencies.**


## How to...

Clone the project:
https://github.com/ApcarJo/Challenge4_GH_PMJ.git

Install dependencies: npm i

Install Postman from https://www.postman.com/downloads/

Add a new collection and use GET with the address: http://localhost:3000 
You can find in line 3 of index.js the variable port with 3000, is the port we used by default, you can change it.

To search top rated films just write:<br>
http://localhost:3000/movies

To find films by id just add a number after movies:<br>
http://localhost:3000/movies/ (your number)

To find films by title:<br>
http://localhost:3000/movies/title/ (your title)

To search movies by genre:<br>
http://localhost:3000/movies/genre/ (your genre)

To obtain a list of top rated series:<br>
http://localhost:3000/series/toprated

To find a tv show by id:<br>
http://localhost:3000/series/id/ (your id)

To find a serie by their title:<br>
http://localhost:3000/series/title/ (your title)

Obtaining series which will have at least one episode aired in the next seven day:<br>
http://localhost:3000/series/ontheair7/

Obtaining series which are screened on theaters:<br>
http://localhost:3000/series/screenedtheater/