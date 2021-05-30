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

     await queryInterface.bulkInsert('orders', [
      {
        "customerId" : "1",
        "movieId" : "100",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "1",
        "movieId" : "120",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "2",
        "movieId" : "150",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "2",
        "movieId" : "200",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "3",
        "movieId" : "180",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "3",
        "movieId" : "400",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "4",
        "movieId" : "300",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "4",
        "movieId" : "300",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "5",
        "movieId" : "190",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "5",
        "movieId" : "500",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "6",
        "movieId" : "300",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "6",
        "movieId" : "450",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "7",
        "movieId" : "438",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "7",
        "movieId" : "222",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "8",
        "movieId" : "333",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "8",
        "movieId" : "444",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        "customerId" : "8",
        "movieId" : "355",
        "rentStart" : "2021-01-01",
        "rentEnd" : "2021-01-01",
        createdAt: new Date(),
        updatedAt: new Date()
      }

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
