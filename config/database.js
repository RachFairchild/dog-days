// config/database.js

require('dotenv').config({path: './config/.env'})

console.log('Connected to db')

module.exports = {

    'url' : process.env.MONGO_URI, 
    'dbName': process.env.DB_NAME

};
