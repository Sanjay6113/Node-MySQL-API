const mysql = require('mysql2');

// create connection
const db = mysql.createConnection({
  host: 'localhost',      // change if your MySQL is remote
  user: 'root',           // your MySQL username
  password: 'Msk@7',           // your MySQL password
  database: 'my_database'      // your database name
});

// connect to db
db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.message);
  } else {
    console.log('✅ Connected to MySQL database');
  }
});

module.exports = db;
