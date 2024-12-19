import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "db",
  user: process.env.MARIADB_USER,
  password: process.env.MARIADB_PASSWORD,
  database: process.env.MARIADB_DATABASE,
  port: 3306,
});

pool
  .getConnection()
  .then((conn) => {
    console.log("Connexion réussie à la base données");
    conn.release();
  })
  .catch((error) => {
    "Erreur: ", error;
  });

export default pool;