# Challenge 5: Movies Website Backend II: Finder
## Made by [Pedro Agulló](https://github.com/PedroAgullo), [Jose Luis Aparicio](https://github.com/ApcarJo) and [Miguel Torres](https://github.com/migueltmsp)<br>
## Hecho por [Pedro Agulló](https://github.com/PedroAgullo), [Jose Luis Aparicio](https://github.com/ApcarJo) and [Miguel Torres](https://github.com/migueltmsp)<br>

This project was proposed and deployed on the 5th week of [GeeksHubs' Full Stack Developer Bootcamp](https://geekshubsacademy.com/)

Este proyecto se propuso e implementó en la 5ª semana del [Bootcamp Full Stack Developer de GeeksHubs](https://geekshubsacademy.com/)

## Index
[English](##English)
* [Goal and used technologies](##Goal-and-used-technologies)
* [Sample1](##Sample-1)
* [Sample2](##Sample-2)
* [Conclusions](##Conclusions)

[Español](##Español)
* [Objetivo y tecnologías empleadas](##Objetivo-y-tecnologías-empleadas)
* [Ejemplo1](##Ejemplo-1)
* [Ejemplo2](##Ejemplo-2)
* [Conclusiones](##Conclusiones)

## English
## Goal and used technologies

The aim of the project was to develop an only-backend service for movies rental, with four defined areas: <br>

* User Management
    * Sign Up Endpoint
    * Profile Endpoint
    * Delete Account Endpoint
    * Log In Endpoint
    * Extra features: JWT; Admin and Client
* Movie/Product Management
    * Search by Title Endpoint
    * Search by Id Endpoint
    * Display all Movies Endpoint
    * Extra features: Filter by Actress/Actor; <br>Filter by Genre
* Order Management
    * Create an Order Endpoint
        * One Movie per Client
        * Reception and Return Dates
    * Extra features: Show all Orders (as Admin).
* Data Management
    * Use of an ORM (Sequelize/MongoDB/MySQL)

## Sample 1

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

This jss file:
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

## Sample 2

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

## Español
## Objetivo y tecnologías empleadas
El objetivo del proyecto es desarrollar un servicio (solo la parte backend) para alquiler de películas, con cuatro áreas definidas: <br>


* Gestión de Usuarios
    * Endpoint para Darse de Alta
    * Endpoint para mostart Información de la Cuenta
    * Endpoint para Darse de Baja
    * Endpoint para Iniciar Sesión
    * Características extra: JWT; Admin y Cliente
* Gestión de Películas/Productos
    * Endpoint para Búsqueda por Título
    * Endpoint para buscar por Id
    * Endpoint para Mostrar todas las Películas
    * Características extra: Filtrar por Actriz/Actor; <br>Filtrar por Género
* Gestión de los Pedidos
    * Endpoint para Crear un Pedido
        * Una única Película por Cliente
        * Fechas de Recepción y de Devolución
    * Características extra: Mostrar todos los Pedidos (solo para el Admin)
* Gestión de Datos
    * Emplear un ORM (Sequelize/MongoDB/MySQL)
## Ejemplo 1
## Ejemplo 2
## Conclusiones