# Challenge 5: Movies Website Backend II: Finder
## Made by [Pedro Agulló](https://github.com/PedroAgullo), [Jose Luis Aparicio](https://github.com/ApcarJo) and [Miguel Torres](https://github.com/migueltmsp)<br>
## Hecho por [Pedro Agulló](https://github.com/PedroAgullo), [Jose Luis Aparicio](https://github.com/ApcarJo) and [Miguel Torres](https://github.com/migueltmsp)<br>

This project was proposed and deployed on the 5th week of [GeeksHubs' Full Stack Developer Bootcamp](https://geekshubsacademy.com/)

Este proyecto se propuso e implementó en la 5ª semana del [Bootcamp Full Stack Developer de GeeksHubs](https://geekshubsacademy.com/)

## Index
[English](##English)
* [Goal and used technologies](##Goal-and-used-technologies)
* [Index, routing and middleware](##Index,-routing-and-middleware)
* [Endpoints and DB Management](##Endpoints-and-DB-Management)
* [Conclusions](##Conclusions)

[Español](##Español)
* [Objetivo y tecnologías empleadas](##Objetivo-y-tecnologías-empleadas)
* [Index, routing y middleware](##Index,-routing-y-middleware)
* [Gestión de los Endpoints y la base de datos](##Gestión-de-los-Endpoints-y-la-base-de-datos)
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

The technologies we used were: <br> <br>
![Visual Studio Code](https://code.visualstudio.com/assets/favicon.ico)
![JavaScript](https://camo.githubusercontent.com/3e9f1d82233cb9a42ed30a63d093f2b4502d879301f8cce220de7f0d3b84f5bf/687474703a2f2f33636f6e31342e62697a2f636f64652f5f646174612f6a732f696e74726f2f6a732d6c6f676f2e706e67)
![Node.js](https://cdn.iconscout.com/icon/free/png-256/node-js-3-1174937.png)
![Express.js](https://d2m06gn7cjwia2.cloudfront.net/express.png)
![JWT](https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869)
![BCrypt](https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8e9aa3e7-93f3-45aa-8aac-d8acf45f33b7_256x256.png)
![Postman](https://cdn.iconscout.com/icon/free/png-256/postman-3521648-2945092.png)
![MySQL Workbench](https://alejandroquirospascual.files.wordpress.com/2014/10/mysql_workbench.png)
![Sequelize](https://cdn.iconscout.com/icon/free/png-256/sequelize-3-1175091.png)



## Index, routing and middleware

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
This js file **imports the .Router() utility from Express.js**, which is used to **link the moviesRouter, customerRouter, orderRouter and loginRouter paths, and therefore their content, to index.js**. In this sense, **router.js is merely a link between the main application (index.js) to its dependencies.**



## Endpoints and DB Management
### Prerequisites
<br>

Clone the project from [here](https://github.com/PedroAgullo/Challenge5_GH_PMJ).

Install the needed dependencies (on Bash): 
```
npm i
```

Install Postman from [here](https://www.postman.com/downloads/).

In Postman:
1. Add a new collection
2. Use GET with the address: http://localhost:3000 <br> <br>
Although we used 3000 as the default port, you can use another one of your choice.

### Movies:
<br>

To search top rated movies type the following:<br>
http://localhost:3000/movies

To find movies by id just add a number after movies: POST<br>
http://localhost:3000/movies

To find movies by title: POST<br>
http://localhost:3000/movies/title 

To search movies by genre: POST<br>
http://localhost:3000/movies/genre 

To search movies by actor/actress: POST<br>
http://localhost:3000/movies/actor/



### Customers
<br>

To get the list of all customers: GET<br>
http://localhost:3000/customer

To find a customer by id: POST - {"customerId": "id"}<br>
http://localhost:3000/customer/id

To find a customer by name: POST - {"name": "name"}<br>
http://localhost:3000/customer/name

To create a new customer **(this will check first if mail exists in the database)**: POST<br>
http://localhost:3000/customer

To modify some attributes of the customer: PUT<br>
http://localhost:3000/customer

To delete a customer: DELETE - {"id": "id"}<br>
http://localhost:3000/customer

### Login
<br>


To log in: POST - {"mail": "yourmail", "password", "yourpassowrd"}
http://localhost:3000/login/

Do not forget to save your token to postman Authorization "bearer token", to realize your actions.


###  Orders
<br>

To get the list of all orders: GET<br>
http://localhost:3000/order

To find a order by id: POST - {"id": "id"}<br>
http://localhost:3000/order/id

To find a order by city: POST - {"city": "city"}<br>
http://localhost:3000/order/city


To create a new order: POST<br>
http://localhost:3000/order/

To delete a order: DELETE - {"id": "id"}<br>
http://localhost:3000/order


### Series
<br>

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
<br>
<br>


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

Las tecnologías empleadas fueron: <br> <br>
![Visual Studio Code](https://code.visualstudio.com/assets/favicon.ico)
![JavaScript](https://camo.githubusercontent.com/3e9f1d82233cb9a42ed30a63d093f2b4502d879301f8cce220de7f0d3b84f5bf/687474703a2f2f33636f6e31342e62697a2f636f64652f5f646174612f6a732f696e74726f2f6a732d6c6f676f2e706e67)
![Node.js](https://cdn.iconscout.com/icon/free/png-256/node-js-3-1174937.png)
![Express.js](https://d2m06gn7cjwia2.cloudfront.net/express.png)
![JWT](https://ps.w.org/jwt-auth/assets/icon-256x256.png?rev=2298869)
![BCrypt](https://cdn.substack.com/image/fetch/w_264,c_limit,f_auto,q_auto:best,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F8e9aa3e7-93f3-45aa-8aac-d8acf45f33b7_256x256.png)
![Postman](https://cdn.iconscout.com/icon/free/png-256/postman-3521648-2945092.png)
![MySQL Workbench](https://alejandroquirospascual.files.wordpress.com/2014/10/mysql_workbench.png)
![Sequelize](https://cdn.iconscout.com/icon/free/png-256/sequelize-3-1175091.png)

## Index, routing y middleware

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

Este archivo js:
1. importó la librería **Express.js**,
2. guardó sus herramientas en "app",
3. seleccionó 3000 como el puerto para el servidor y
4. linked **router.js**.
4. enlazó con **router.js**


Entonces, las herramientras de router.js y de express.json fueron "usadas", o, asumimos, guardadas en memoria.



**app.listen() _lanzó_ un servidor local node.js que emplea el puerto 3000.**
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

Este archivo js **importa la herramienta .Router() desde Express.js**, la cual emplea para **enlazar las rutas de moviesRouter, loginRouter, orderRouter y customerRouter, y por tanto su contenido, con index.js**. En este sentido, **router.js es un mero enlace entre la aplicación principal (index.js) con sus dependencias.**

<br>

## Gestión de los Endpoints y la base de datos
### Prerequisitos
<br>

Clonar el proyecto desde [aquí](https://github.com/PedroAgullo/Challenge5_GH_PMJ).

Instalar dependencias (desde Bash):
```
 npm i
 ```

Instalar Postman desde [aquí](https://www.postman.com/downloads/).

En Postman:
1. Crea una nueva colección
2. Emplea GET con la dirección: http://localhost:3000 <br> <br>
Aunque nosotros hemos usado el puerto 3000, se puede utilizar cualquier otro a voluntad.

### Movies:
<br>
Búsqueda de películas mejor valoradas<br>

http://localhost:3000/movies

Búsqueda de películas por id POST<br>
http://localhost:3000/movies

Búsqueda de películas por título POST<br>
http://localhost:3000/movies/title 

Búsqueda de películas por género POST<br>
http://localhost:3000/movies/genre 

Búsqueda de películas por actor/actriz POST<br>
http://localhost:3000/movies/actor/



### Customers
<br>
Obtener una lista de todos los clientes GET<br>

http://localhost:3000/customer

Búsqueda de cliente por id POST - {"customerId": "id"}<br>
http://localhost:3000/customer/id

Búsqueda de cliente por nombre POST - {"name": "name"}<br>
http://localhost:3000/customer/name

Crear un nuevo usuario **(comprobará primero si el email ya está registrado)** POST<br>
http://localhost:3000/customer

Modificar datos del cliente PUT<br>
http://localhost:3000/customer

Eliminar cliente DELETE - {"id": "id"}<br>
http://localhost:3000/customer

### Login
<br>

Login POST - {"mail": "yourmail", "password", "yourpassowrd"}
http://localhost:3000/login/


**No olvidar almacenar el token en Authorization/Bearer Token!**


###  Orders
<br>
Listar todos los pedidos GET<br>

http://localhost:3000/order

Búsqueda de pedido por id POST - {"id": "id"}<br>
http://localhost:3000/order/id

Búsqueda de pedido por ciudad POST - {"city": "city"}<br>
http://localhost:3000/order/city

Crear nuevo pedido POST<br>
http://localhost:3000/order/

Borrar pedido DELETE - {"id": "id"}<br>
http://localhost:3000/order


### Series
<br>
Listar series mejor valoradas<br>

http://localhost:3000/series/toprated

Búsqueda de series por id<br>
http://localhost:3000/series/id/ (your id)

Búsqueda de series por título<br>
http://localhost:3000/series/title/ (your title)

Listar series que serán emitidas en los próximos siete días<br>
http://localhost:3000/series/ontheair7/

Listar series que serán representadas en cines o teatros<br>
http://localhost:3000/series/screenedtheater/
<br>
<br>

## Conclusiones