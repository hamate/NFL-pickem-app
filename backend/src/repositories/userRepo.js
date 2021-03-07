import { db } from '../data/connection';

export const userRepo = {
  async getUserByUsername(username) {
    const sqlQuery = 'SELECT * FROM users WHERE username=?;';
    try {
      return await db.query(sqlQuery, [username]);
    } catch (err) {
      throw { status: 500, message: err.sqlMessage };
    }
  },

  async registerUser(username, email, password) {
    const sqlQueryInsert = 'INSERT INTO users(username, password, email) VALUES(?,?,?);';
    try {
      return await db.query(sqlQueryInsert, [username, password, email]);
    } catch (error) {
      throw { status: 500, message: error.sqlMessage };
    }
  },
  async getUser(username) {
    const sql = `SELECT userid, password FROM users
      WHERE username = ?;`;
    try {
      return await db.query(sql, username);
    } catch (err) {
      throw { status: 500, message: err.sqlMessage };
    }
  },
};
