const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const dbPath = path.join(__dirname, 'mydatabase.db'); // Substitua 'mydatabase.db' pelo nome desejado para o arquivo de banco de dados

const db = new sqlite3.Database(dbPath);

module.exports = db;
