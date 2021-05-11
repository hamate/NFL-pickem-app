import { leaguesRepo } from '../repositories';

export const leagueService = {
  validateLeagueData(leagueName, sportId, maxUsers) {
    if (leagueName !== undefined) {
      return {
        message: 'League name is required.',
        status: 400,
      };
    }
    if (sportId !== undefined) {
      return {
        message: 'Please select league type.',
        status: 400,
      };
    }
    if (maxUsers !== undefined) {
      return {
        message: 'Maximum number of users is required.',
        status: 400,
      };
    }
    if (maxUsers <= 1 || maxUsers > 100) {
      return {
        message: 'Valid number of users: 2-100.',
        status: 400,
      };
    }
    return undefined;
  },

  async addLeague(leagueName, sportId, userId, maxUsers) {
    try {
      return await leaguesRepo.addLeague(leagueName, sportId, userId, maxUsers);
    } catch (err) {
      throw { status: 401, message: err.message };
    }
  },

  async updateLeague(leagueId, leagueName, maxUsers) {
    try {
      return await leaguesRepo.updateLeague(leagueId, leagueName, maxUsers);
    } catch (err) {
      throw { status: 401, message: err.message };
    }
  },
};
