// Use the MariaDB Node.js Connector
var mariadb = require('mariadb');

// Create a connection pool
var pool =
    mariadb.createPool({
        host: "127.0.0.1",
        user: "root",
        password: "vinoFRUITsql1602",
        database: "main_db",
        dateStrings: true
});

// Test the connection to MariaDB SkySQL
pool.getConnection()
    .then(conn => {
        console.log('Connected to MariaDB SkySQL');
        conn.release();
    })
    .catch(err => {
        console.log('Unable to connect to MariaDB SkySQL');
        console.log(err);
    });

// Expose a method to establish connection with MariaDB SkySQL
module.exports = Object.freeze({
    pool: pool
});