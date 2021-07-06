const db = require('../dbinit');
const SavedStuff = require('./SavedStuff');


db.sequelize.sync({force: false});


module.exports = {

    SavedStuff
    
}