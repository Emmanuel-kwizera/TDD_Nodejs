import mysql from 'mysql2'

const connection = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  database : 'some_database'
})

export async function getUser(username) {
    const [rows] = await connection.promise().query(
      `SELECT * 
        FROM users 
        WHERE username = ?`,
      [username]
    )
  
    return rows[0]
  }