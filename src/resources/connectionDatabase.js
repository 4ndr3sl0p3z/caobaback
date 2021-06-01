import util  from 'util';
import mysql from 'mysql';

const config = {
    connectionLimit : 100,
    host            : process.env.DATABASE_HOST,
    user            : process.env.DATABASE_USER,
    password        : process.env.DATABASE_PASSWORD,
    database        : process.env.DATABASE_NAME,
    port            : process.env.DATABASE_PORT,
    dateStrings     : true,
}

const pool = mysql.createPool(config);

pool.getConnection((err, connection) => {
    if(err){
        if (err.code === "PROTOCOL_CONNECTION_LOST") {
            console.error("Database connection was closed.");
          }
          if (err.code === "ER_CON_COUNT_ERROR") {
            console.error("Database has too many connections.");
          }
          if (err.code === "ECONNREFUSED") {
            console.error("Database connection was refused.");
          }
    }
    else{
        connection.release();
        return;
    }
});

pool.query = util.promisify(pool.query);

export default pool