import { leagueService } from '../services';

export const leagueController = {
  async getJoinedLeagues(req, res, next) {
    const { userId } = req.params;
    try {
      const joinedLeaguesData = await leagueService.getJoinedLeagues(userId);
      res.status(200).json(joinedLeaguesData);
    } catch (error) {
      next(error);
    }
  },
  async addLeague(req, res, next) {
    const {
      leagueName,
      sportId,
      userId,
      maxUsers,
    } = req.params;
    try {
      const addLeagueData = await leagueService.addLeague(
        leagueName,
        sportId,
        userId,
        maxUsers,
      );
      res.status(200).json(addLeagueData);
    } catch (error) {
      next(error);
    }
  },
  async updateLeague(req, res, next) {
    const {
      leagueId,
      leagueName,
      maxUsers,
    } = req.params;
    try {
      const updateLeagueData = await leagueService.updateLeague(
        leagueId,
        leagueName,
        maxUsers,
      );
      res.status(200).json(updateLeagueData);
    } catch (error) {
      next(error);
    }
  },
};