const db = require("../db/useData");

function getDataFromDatabase() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM inputs', (err, rows) => {
            if (err) {
                reject(err);
            } else {
                console.log(rows)
                resolve(rows);
            }
        });

        // Fecha a conexão com o banco de dados
        db.close();
    });
}

module.exports = getDataFromDatabase;