import { db } from '../data/connection';

export const leaguesRepo = {
  async getLeagueById(leagueId) {
    const sqlQuery = 'SELECT * FROM leagues WHERE id=?;';
    try {
      return await db.query(sqlQuery, [leagueId]);
    } catch (err) {
      throw { status: 500, message: err.sqlMessage };
    }
  },

  async addLeague(leagueName, sportId, userId, maxUsers) {
    const sqlQueryInsert = 'INSERT INTO leagues(league_name, sport_id, owner_id, max_users) VALUES(?,?,?,?);';
    try {
      return await db.query(sqlQueryInsert, [leagueName, sportId, userId, maxUsers]);
    } catch (error) {
      throw { status: 500, message: error.sqlMessage };
    }
  },

  async updateLeague(leagueId, leagueName, maxUsers) {
    const sql = `UPDATE leagues SET league_name=?, max_users=?
      WHERE id = ?;`;
    try {
      return await db.query(sql, [leagueName, maxUsers, leagueId]);
    } catch (err) {
      throw { status: 500, message: err.sqlMessage };
    }
  },
};
