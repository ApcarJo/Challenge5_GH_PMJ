'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('customers', [
      {
        "name": "Miguel",
        "surname1": "Torres",
        "surname2": "Apellido2",
        "dni": "948372615",
        "birthdate": "1993-01-01",
        "phone": "968473362",
        "address": "C/ ",
        "city": "Valencia",
        "postalcode": "46001",
        "mail": "miguel@gmail.com",
        "password": "$2b$10$chNY7zNUEkhkiz5p3/pdkO9KeX4wAH8sKSTVn6QBuVp02BhFgHj4C",
        "admin": true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
      "name": "Jose Luis",
      "surname1": "Aparicio",
      "surname2": "Carbonell",
      "dni": "84938372",
      "birthdate": "1986-01-01",
      "phone": "987654324",
      "address": "Avenida Reino de Valencia",
      "city": "Valencia",
      "postalcode": "46002",
      "mail": "jose@gmail.com",
      "password": "$2b$10$DzWuRzFaDFJ7FvByWyvfKOcwZcTRW4lJ4KDs8EVrfvgJWGbrqpp2m",
      "admin": true,
      createdAt: new Date(),
      updatedAt: new Date()      
      },
      {
        "name": "Pedro",
        "surname1": "Agulló",
        "surname2": "Marco",
        "dni": "48372638",
        "birthdate": "1982-04-21",
        "phone": "987654324",
        "address": "Avd. Juan Carlos I",
        "city": "Caudete",
        "postalcode": "02660",
        "mail": "pedro@gmail.com",
        "password": "$2b$10$Wri6hNf9tsUCoLoH6DBAcOPQ8W/nhPfqsapMWeTV/YrC8yLKwc72a",
        "admin": true,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        "name": "Felipe",
        "surname1": "Gil",
        "surname2": "Díaz",
        "dni": "74635243",
        "birthdate": "1970-01-01",
        "phone": "98746387",
        "address": "Avenida Ramón y Cajal",
        "city": "Alicante",
        "postalcode": "03001",
        "mail": "felipe@gmail.com",
        "password": "$2b$10$FhTCOqkhCTqeV3EC7vTd8eF7GxLPt7QUpC6ropph9bomvP8OWJr8i",
        "admin": false,
        createdAt: new Date(),
        updatedAt: new Date()        
      },
      {
        "name": "Juan",
        "surname1": "Carrión",
        "surname2": "Navalón",
        "dni": "64738390",
        "birthdate": "1990-01-01",
        "phone": "965826489",
        "address": "Calle Echegaray",
        "city": "Murcia",
        "postalcode": "50510",
        "mail": "juan@gmail.com",
        "password": "$2b$10$b8wWaSMqWyOEOqunEIqSUeTfp456i5diM6iTq3nW3yGS0O1SwMma6",
        "admin": false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "Natalia",
        "surname1": "Navarro",
        "surname2": "Martínez",
        "dni": "85494763",
        "birthdate": "1993-01-01",
        "phone": "96501487",
        "address": "C/ La nieve",
        "city": "Murcia",
        "postalcode": "30510",
        "mail": "natalia@gmail.com",
        "password": "$2b$10$it6mNUW4LPCje5iACDjf2e.TVKvh0RnkDR.1tIAzcO8wcz.nz6mD.",
        "admin": false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "Mari",
        "surname1": "Mollá",
        "surname2": "Fernández",
        "dni": "27363545",
        "birthdate": "1992-01-01",
        "phone": "9687214",
        "address": "C/ El Molino",
        "city": "Caudete",
        "postalcode": "02660",
        "mail": "mari@gmail.com",
        "password": "$2b$10$lfxwXVJYTRQDIqe27j2Gw.2JSBEGKSLeqPd3duNe3ev4P8YeS5/AC",
        "admin": false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "name": "Alicia",
        "surname1": "Solera",
        "surname2": "Alemán",
        "dni": "85494763",
        "birthdate": "1998-01-01",
        "phone": "95478412",
        "address": "C/ Corona de Aragón",
        "city": "Castellón",
        "postalcode": "06214",
        "mail": "alicia@gmail.com",
        "password": "$2b$10$tnG3/ZjJB4KWLUakJGTXieGgYVnP.V9xCjdCDy2lJpVQ8H1WHYaPq",
        "admin": false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]

    );

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
