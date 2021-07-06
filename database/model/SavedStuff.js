const Sequelize = require('sequelize');
const db = require('../dbinit');

const SavedStuff = db.sequelize.define('savedInfo', {

    userInput: {

        type: Sequelize.TEXT,
        allowNull: false

    }

})

module.exports = SavedStuff;