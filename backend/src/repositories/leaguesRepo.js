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

  async addLeague(leagueName, sportId, userId, maxUsers, hashedPassword) {
    const sqlQueryInsert =
      'INSERT INTO leagues(league_name, sport_id, owner_id, max_users, password) VALUES(?,?,?,?,?);';
    try {
      const addLeagueSql = await db.query(sqlQueryInsert, [
        leagueName,
        sportId,
        userId,
        maxUsers,
        hashedPassword,
      ]);
      const sqlAddLeagueUser =
        'INSERT INTO leagueUsers(user_id, league_id) VALUES(?,?);';
      await db.query(sqlAddLeagueUser, [userId, addLeagueSql.results.insertId]);
      return addLeagueSql;
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

  async getUserLeagues(userId) {
    try {
      const sql = 'SELECT id, league_name FROM leagues WHERE id IN (SELECT league_id FROM leagueUsers WHERE user_id = ?);';
      const getLeagueNames = await db.query(sql, [userId]);
      console.log(getLeagueNames);
      return getLeagueNames;
    } catch (err) {
      throw { status: 500, message: err.sqlMessage };
    }
  },
};
