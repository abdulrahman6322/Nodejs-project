const mongoose = require('mongoose');// mongoose module

const dbConnection = () => {
    mongoose.connect(process.env.DB_URI)
    .then((conn) => {
        console.log(`Connecting to DB ${conn.connection.host}`);
    })
    .catch(err => {
        console.log(`Error connecting to DB ${err}`);
        process.exit(1); // exit with failure message
    });

}
module.exports = dbConnection;